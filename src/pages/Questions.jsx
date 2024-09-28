import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { CHANGE_SCORE_ } from "../redux/actions";
import {decode} from 'html-entities';


const Questions = () => {
  // get settingsData
  const { category, diffi, type, numberOfQ, score } = useSelector(
    (state) => state
  );

const router =useNavigate()
const  dispatch =useDispatch()




  let ApiUrl = `/api.php?amount=${numberOfQ}`;

  if (category) {
    ApiUrl = ApiUrl.concat(`&category=${category}`);
  }

  if (type) {
    ApiUrl = ApiUrl.concat(`&type=${type}`);
  }

  if (diffi) {
    ApiUrl = ApiUrl.concat(`&difficulty=${diffi}`);
  }

  const { response, loading, error } = useAxios({ url: ApiUrl });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [options, setOptions] = useState([]);


  // get random number
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // get answers
  useEffect(() => {
    if (response?.results?.length) {
      const question = response.results[questionIndex];

      let answers = [...question.incorrect_answers];

      //answers splice
      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOptions(answers);
    }
  }, [response, questionIndex]);

  // loading
  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div
          className="animate-spin inline-block size-14 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

  // error
  if (error)
    <img src="/404.png" alt="" className="w-full h-screen object-contain  " />;

  // handleAnswerClick
  const handleAnswerClick = (e) => {

const question = response.results[questionIndex]
if(e.target.innerText === question.correct_answer ){

  dispatch(CHANGE_SCORE_(score + 1))
}



    if (questionIndex + 1 < response?.results.length) {
      setQuestionIndex(questionIndex + 1);
    }else(
      router('/score')
   
    )




  };

  return (
    <div className="pt-20   ">
      <div className="mx-auto max-w-screen-md flex flex-col items-center max-sm:px-[10%] ">
        {/* title q */}
        <h1 className="text-center underline pb-2 text-2xl md:text-4xl lg:text-5xl font-semibold  ">
          Question  {questionIndex + 1}
        </h1>

        {/* question */}
        <h1 className="text-center  my-5 font-semibold text-xl md:text-2xl lg:text-3xl capitalize ">
          { decode(response?.results[questionIndex]?.question) }
        </h1>

        {/* Answer buttons */}

        <div className="flex flex-col space-y-2 mt-7">
          {options.map((item, i) => (
            <button
              onClick={handleAnswerClick}
              key={i}
              className="
active:scale-90 hover:bg-blue-500  hover:text-white bg-transparent  text-black !border !border-blue-700
 px-5 rounded-lg py-2 md:text-xl lg:2xl max-md:focus:bg-transparent max-md:focus:text-black "
            >
              {decode(item)}
            </button>
          ))}
        </div>

<div className="my-5" >
  <h1 className="font-semibold text-lg py-3 " >Score : {score} / {response?.results?.length}</h1>
</div>



      </div>
    </div>
  );
};

export default Questions;

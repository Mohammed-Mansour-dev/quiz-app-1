import { useNavigate } from "react-router-dom";
import NumInput from "../components/NumInput";
import SelectField from "../components/SelectField";
import useAxios from "../hooks/useAxios";
import { useDispatch } from "react-redux";

const Settings = () => {

const dispatch =useDispatch()


  const router =useNavigate()

// options data
const diffucltyOptions =[
  {id:"easy",name:"Easy"},
  {id:"medium",name:"Medium"},
  {id:"hard",name:"Hard"},
];

const typeOptions =[
  {id:"multiple",name:"Multiple Choices"},
  {id:"boolean",name:"True/False"},

];




  // get data
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
 


// handle submit  
  const handleSubmit = (e) => {
    e.preventDefault();

router("/questions")


  };

  // loading
  if(loading)  return (
      <div className="w-full h-screen flex justify-center items-center" >
           <div className="animate-spin inline-block size-14 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
  <span className="sr-only">Loading...</span>
</div>
      </div>
      );

  // error
  if(error)<img src="/404.png" alt="" className="w-full h-screen object-contain  " />

 
// main page
  return (
   <div className="w-full">
      <div className="max-w-[600px] mx-auto px-5 pt-40 ">
        <h1 className="text-center font-bold text-5xl capitalize  ">
          quiz app
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="p-3 space-y-3 flex flex-col ">
            <SelectField
              settingsData={response.trivia_categories
              }
              label="Category"
            />
            <SelectField
            label="Difficulty"
              settingsData={diffucltyOptions}
            />
            <SelectField
              settingsData={typeOptions}
              label={"Type"}
            />
            <NumInput inputData={{ title: "number of Questions" }} />

            <button
              type="submit"
              className="w-full hover:opacity-95 active:scale-95 bg-[#006BC9] text-white rounded-lg mt-3 px-3 py-2  "
            >
              get started
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;

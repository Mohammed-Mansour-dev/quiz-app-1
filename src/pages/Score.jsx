import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CHANGE_NUMOFQ_, CHANGE_SCORE_ } from '../redux/actions'

const Score = () => {

const {score ,numberOfQ}  =useSelector(state => state)
const router = useNavigate()
const dispatch =useDispatch()


const goBack = () =>{
dispatch(CHANGE_SCORE_(0));
dispatch(CHANGE_NUMOFQ_(20));
router("/")


}

  return (
    <div className='flex flex-col justify-center items-center h-screen ' >

<h1 className='font-bold text-3xl py-7' >Final Score : {score}</h1>

      <button onClick={goBack} className='text-blue-600 border border-blue-500 px-3 py-1 rounded-lg hover:underline ' >
        Back to settings
      </button>
    </div>
  )
}

export default Score

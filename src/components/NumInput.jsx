import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_NUMOFQ } from '../redux/actionsTypes'
import { CHANGE_NUMOFQ_  } from '../redux/actions'

const NumInput = ({inputData}) => {
const [inputValue , setInputValue ] = useState("")
const dispatch = useDispatch()

const handleInput = (event) => {
  setInputValue(event.target.value)
dispatch(CHANGE_NUMOFQ_(event.target.value))
console.log(event.target.value)
}



  return (
    <div>
      
<div>
<div className="relative w-full  ">
        {/* Label with position to overlap the border */}
        <label
          htmlFor="input"
          className="absolute capitalize -top-3 left-3 bg-[#f7f7f7] px-1 text-sm font-medium text-gray-700"
        >
      {inputData.title}
        </label>
        
        {/* Select element */}

<input type="number"  
value={inputValue}

max={20}
onChange={(event) =>handleInput(event)}
id='input' 
placeholder='123'
          className="block w-full  px-3 py-2 mt-4 bg-[#f7f7f7] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
        
    
     
    </div>





</div>




    </div>
  )
}

export default NumInput

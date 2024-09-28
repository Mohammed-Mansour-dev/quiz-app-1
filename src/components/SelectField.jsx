import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { CHANGE_CATEGORY_, CHANGE_DIFFICULTY_, CHANGE_TYPE_ } from "../redux/actions";

const SelectField = ({settingsData,label}) => {
    const [selectedValue, setSelectedValue] = useState("");
const dispatch =useDispatch()


// handle selected value & send event to redux
const handleSelect = (e)=>{
setSelectedValue(e.target.value);
console.log(e.target.value);
switch (label) {
  case "Category":
    return dispatch(CHANGE_CATEGORY_(e.target.value));
    
case "Type":
  return dispatch(CHANGE_TYPE_(e.target.value));

  case "Difficulty":
    return dispatch(CHANGE_DIFFICULTY_(e.target.value));

   
  default:
    return;
}




}
   
  
    return (

<div className="">

     <div className="relative w-full  ">
        {/* Label with position to overlap the border */}
        <label
          htmlFor="custom-select"
          className="absolute -top-3 left-3 bg-[#f7f7f7] px-1 text-sm font-medium text-gray-700"
        >
         {label}
        </label>
        
        {/* Select element */}
        <select
          id="custom-select"
          value={selectedValue}
          onChange={ handleSelect}

          className="block w-full  px-3 py-2 mt-4 bg-[#f7f7f7] border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
              <option disabled value="">select {label}</option>

        {
            settingsData.map((option, index) => (
              <option key={index} value={option.id}>{option.name}</option>
            ))
        }
        
     
        </select>
      </div>

</div>



 
    );
}

export default SelectField

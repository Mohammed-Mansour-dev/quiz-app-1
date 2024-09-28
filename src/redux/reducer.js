import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_NUMOFQ, CHANGE_SCORE, CHANGE_TYPE } from "./actionsTypes";

const initialState ={
category:"",
diffi:"",
type:"",
numberOfQ:20,
score:0

}

export const reducer = (state =initialState,action) =>{
switch(action.type){

// 1
case CHANGE_CATEGORY:
return {
    ...state,
    category:action.payload
}

// 2
case CHANGE_DIFFICULTY:
    return {
       ...state,
       diffi:action.payload
    }

    // 3
    case CHANGE_TYPE:
        return {
           ...state,
            type:action.payload
        }
// 4
        case CHANGE_NUMOFQ :
            return {
               ...state,
                numberOfQ:action.payload
            }

            // 5
            case CHANGE_SCORE:
                return {
                   ...state,
                    score:action.payload
                }



default:
return state;
}}



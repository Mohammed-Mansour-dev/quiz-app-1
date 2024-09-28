import { CHANGE_CATEGORY, CHANGE_DIFFICULTY, CHANGE_NUMOFQ, CHANGE_SCORE, CHANGE_TYPE } from "./actionsTypes";

const CHANGE_CATEGORY_ =(payload)=>({
    type: CHANGE_CATEGORY,
    payload
})
const CHANGE_DIFFICULTY_ =(payload)=>({
    type: CHANGE_DIFFICULTY,
    payload
})
const CHANGE_SCORE_ =(payload)=>({
    type: CHANGE_SCORE,
    payload
})
const CHANGE_NUMOFQ_ =(payload)=>({
    type: CHANGE_NUMOFQ,
    payload
})
const CHANGE_TYPE_ =(payload)=>({
    type: CHANGE_TYPE,
    payload
})


export {CHANGE_SCORE_, CHANGE_CATEGORY_, CHANGE_DIFFICULTY_, CHANGE_NUMOFQ_, CHANGE_TYPE_};



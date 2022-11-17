import {createReducer,createAction} from '@reduxjs/toolkit'
const initialState={
    answer:null,
    message:null,
    error:null
}
const postAnswer=createAction('POST_ANSWER')
const err=createAction('ERROR')
const msg=createAction('MESSAGE')
const clear=createAction('CLEAR')

export const AnswerReducer=createReducer(initialState,builder => {
    builder
        .addCase(postAnswer,(state,action)=>{
            state.answer=action.payload
        })
        .addCase(err,(state,action)=>{
            state.error=action.payload
        })
        .addCase(msg,(state,action)=>{
            state.message=action.payload
        })
        .addCase(clear,(state)=>{
            state.error=null
            state.message=null
        })


})
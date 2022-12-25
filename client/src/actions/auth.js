import * as api from '../api'
import {setCurrentUser} from './currentUser'
import {showError, showMessage} from "./Error";

export const signup=(authData,navigate)=>async (dispatch)=>{
    try{
        const {data}=await api.signUp(authData)
        await dispatch({type:"AUTH",data})
        await dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        await dispatch(showMessage('Successfully Signed Up'))
        await dispatch(showMessage('Redirecting...'))
        navigate('/')
    }catch (e) {
        await  dispatch(showError(e.message))
        console.log(e)
    }
}
export const login=(authData,navigate)=>async (dispatch)=>{
    try{
        const {data}=await api.logIn(authData)
        await dispatch({type:"AUTH",data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    }catch (e) {
        await  dispatch({type:"ERROR",payload:e.message})
        console.log(e)
    }
}
export const getAllUser=()=>async (dispatch)=>{
    try{
        const {data}=await api.getAllUsers()
        await dispatch({type:"ALL_USER",payload:data.result})
    }catch (e) {
        await  dispatch({type:"ERROR",payload:e.message})
        console.log(e)
    }
}
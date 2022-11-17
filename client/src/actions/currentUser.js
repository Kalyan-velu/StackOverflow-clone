import {showError, showMessage} from "./Error";
import {getAllUser} from "./auth";
import * as api from '../api/index'
export const setCurrentUser = (data)=>{
   return{
      type: 'FETCH_CURRENT_USER',
      payload:data
   }
}
export const removeCurrentUser =()=>async(dispatch)=>{
   await dispatch({type:'DELETE_CURRENT_USER'})
   await dispatch(showMessage('Logged Out 😥'))
}

export const updateUserDetails=(setSwitch,Switch,id,updateData)=>async (dispatch)=>{
   const {name,about,tags}=updateData
   try{
      const {data}=await api.updateProfile(id,{name,about,tags})
      await dispatch({type:'UPDATE_USER',payload:data.result})
      await setSwitch(!Switch)
      console.log(data)
      dispatch(getAllUser())
      await localStorage.setItem('updatedProfile',JSON.stringify( data.result))
      await dispatch(showMessage('User Details Updated'))
   }catch (e) {
      console.log(e)
      dispatch(showError('Error'))
   }

}
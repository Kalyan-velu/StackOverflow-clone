import axios from "axios";

const api=axios.create({baseURL:"https://stackoverflow-clone.adaptable.app"})
api.interceptors.request.use(req=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
        return req
    }
})
export const logIn=(authData)=>axios.post('https://stackoverflow-clone.adaptable.app/api/user/login',authData)
export const signUp=(authData)=>axios.post('https://stackoverflow-clone.adaptable.app/api/user/signup',authData)
export const getAllUsers=()=>axios.get('https://stackoverflow-clone.adaptable.app/api/user/all')
export const updateProfile=(id,updateData)=>api.patch(`https://stackoverflow-clone.adaptable.app/api/user/update/${id}`,updateData)

export const postQuestion=(questionData)=>api.post('/api/question/ask',questionData)
export const getAllQuestion=()=>axios.get('https://stackoverflow-clone.adaptable.app/api/question/get')
export const deleteQuestion=(id)=>api.delete(`/api/question/delete/${id}`)
export const voteQuestion=(id,value,userId)=>api.patch(`/api/question/vote/${id}`,{value,userId})

export const postAnswer=(id,{noOfAnswers,answerBody,userAnswered,userId})=>api.patch(`/api/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer=(id,answerData)=>api.patch(`/api/answer/delete/${id}`,answerData)
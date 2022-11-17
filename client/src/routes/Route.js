import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Auth from '../pages/Auth/Auth'
import Home from '../pages/home/Home'
import Questions from '../pages/questions/Questions'
import AskQuestion from '../pages/askQuestion/AskQuestion'
import DisplayQuestion from '../pages/questions/DisplayQuestion'
import Tags from "../pages/tags/Tag";
import Users from "../pages/user/Users";
import UserProfile from "../pages/user/profile/UserProfile";

function AppRoutes() {
  return (
      <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/auth' element={<Auth/>}/>
         <Route exact path='/questions' element={<Questions/>}/>
         <Route exact path='/tags' element={<Tags/>}/>
         <Route exact path='/user' element={<Users/>}/>
         <Route exact path='/user/:id' element={<UserProfile/>}/>
         <Route exact path='/ask-question' element={<AskQuestion/>}/>
         <Route exact path='/questions/:id' element={<DisplayQuestion/>}/>
      </Routes>
  )
}

export default AppRoutes
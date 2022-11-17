import React, {useEffect} from 'react'
import {Logo} from '../../assets/Logo'
import { Link } from '../button/Link'
import Avatar from '../avatar/Avatar'
import Button from '../button/Button'
import { useDispatch, useSelector} from 'react-redux'
import { removeCurrentUser } from '../../actions/currentUser'
import "./Navbar.css"
import decode from "jwt-decode";


function Navbar() {
   const dispatch=useDispatch()
   const {currentUser:User}= useSelector((state)=>state.user)
   const logOut=()=>{
      dispatch(removeCurrentUser())
   }
   useEffect(()=>{
      const token=User?.token
      if(token){
         const decodedToken =decode(token)
         if(decodedToken.exp * 1000 < new Date().getTime()){
            logOut()
         }
      }
   },[logOut])

   return (
    <nav className='nav'>
      <div className="navbar">
         <Link to="/" className='nav-item nav-logo'>
            <Logo/>
         </Link>
         <Link to="/" className="nav-item nav-btn"> About </Link>
         <Link to="/" className="nav-item nav-btn"> Products </Link>
         <Link to="/" className="nav-item nav-btn"> For Teams </Link>

         <form>
            <input type="text" name="search" id="search" placeholder='Seach....' />
            <i className="fa-solid fa-magnifying-glass"></i>
         </form>
         {User === null ? 
            <Link to="/auth" className='nav-item nav-links'>
               Log In
            </Link> :
            <>
               <Link to={`/user/${User?.result?._id}`} style={{textDecoration:'none'}}>
                  <Avatar
                     backgroundColor={'#009dff'}
                     px={'12px'}
                     py={'6px'}
                     borderRadius={'50%'}
                     children={User?.result.name}
                     color="white"
                  />
               </Link>
               <Button onClick={logOut} className={"nav-item nav-links"} >
                  Log Out
               </Button>
            </>  
      }
      </div>
   </nav>
  )
}

export default Navbar
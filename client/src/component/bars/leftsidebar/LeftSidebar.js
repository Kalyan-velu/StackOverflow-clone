import React from 'react'
import { NavLink } from 'react-router-dom'
import "./LeftSidebar.css"
function LeftSidebar() {
  return (
    <div className='left-sidebar'>
      <nav className="side-nav">
        <NavLink to={"/"}
                 className="side-nav-links" 
                 activeClassName="active"
                 style={{paddlingLeft:'40px'}}
        >
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div><p>PUBLIC</p></div>
          <NavLink to={"/questions"} className="side-nav-links" activeclassname="active">
            <i className="fa-solid fa-globe"></i>
            <p style={{paddingLeft:"10px"}}>Question</p>
          </NavLink>
          <NavLink to={"/tags"}
                   className="side-nav-links" 
                   activeClassName="active"
          >
               <p style={{paddingLeft:"10px"}}>Tag</p>
          </NavLink>
          <NavLink to={"/user"}
                   className="side-nav-links" 
                   activeClassName="active"
          >
                <p style={{paddingLeft:"10px"}}>User</p>
          </NavLink>
          
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar
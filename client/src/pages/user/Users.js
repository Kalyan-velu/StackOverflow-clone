import React from 'react'
import {useDispatch} from "react-redux";
import LeftSidebar from "../../component/bars/leftsidebar/LeftSidebar";
import {getAllUser} from "../../actions/auth";
import UserList from "./UserList";
import './User.css'
const Users=()=>{
    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(getAllUser())
    },[])
    return(
        <div className={'home-container-1'}>
            <LeftSidebar/>
            <div className={'home-container-2'} style={{marginTop:50}}>
                <h1>Users</h1>
                 <UserList/>
            </div>
        </div>
    )
}
export default Users
import React from 'react'
import {useSelector} from "react-redux";
import {Link} from "../../component/button/Link";
import './User.css'
import Avatar from "../../component/avatar/Avatar";

 const UserList=()=>{
    const {allUser:users}=useSelector((state)=>state.user)
    return(
        <div className='user-list-header'>
        <h1>Users</h1>
        <div className={'user-list-container'}>
        {users &&
        users.map((user,index)=>(
            <div key={index}>
             <User user={user} key={user?._id}/>
            </div>
        ))
        }
        </div>
        </div>
    )
}
export default UserList

export const User=({user})=>{
    return (
        <div key={user?._id}>
            <Link key={user?.name} className={"user-profile-link"} to={`/user/${user?._id}`}>
                <Avatar className={'avatar'}  children={user?.name}/>
                <h5>{user?.name}</h5>
            </Link>
        </div>
    )
}
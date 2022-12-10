import React from 'react'
import './Community.css'
import Button from '../../component/button/Button'
const CommunityHome = () => {
  return (
   <div className='community-home-container'>
      <div className="community-new-post">
         <h3>Add A Community Post</h3>
         <form >
            <div className='newpost-form'>
               <label htmlFor="caption">
               <textarea cols={20} rows="10" name="caption" id="caption" />
               </label>
               <div className='form-btn'>
                  <Button className={'pic-btn btn'}/>
                  <Button className={'text-btn btn'}/>
                  <Button className={'doc-btn btn'}/>
               </div>
            </div>
         </form>
      </div>
      <div className='community-posts'>

      </div>
   </div>
  )
}

export default CommunityHome
import React,{useState,useRef}from 'react'
import {useSelector} from "react-redux";
import PostsContainer from '../community/post/PostsContainer'
import Button from '../../component/button/Button'

import './Community.css'
import { Link } from '../../component/button/Link';


const CommunityHome = () => {
  const [postBody, setPostBody] = useState('')
  const [file,setFile]=useState(null)
  const filePicker = useRef(null)
   const {currentUser:user}=useSelector((state)=>state.user)
  console.log(file)
   const handleSubmit=(e)=>{
      e.preventDefault()
      console.log({postBody})
   }

   const selectedPhoto = (e) => {
      const reader = new FileReader();
      if (e.target.files[0]) {
          reader.readAsDataURL(e.target.files[0])
          reader.onload = (readerEvent) => {
              setFile(readerEvent.target.result)
          }
      }
  }
  return (
   <div className='community-home-container'>
      <h3>StackOverflow Community Post</h3>
      <div className="community-new-post">
         <form onSubmit={(e)=>handleSubmit(e)}>
            <div className='newpost-form'>
               {!file?
               <label htmlFor="caption">
               <textarea
                  autoFocus
                  onChange={(e)=>setPostBody(e.target.value)}
                  placeholder='Type something to post.'
                  title='Type Something..'
                  cols={20} 
                  rows="10" 
                  name="caption" 
                  id="caption"
               />
               </label>:
               <img className="img" src={file}  alt="selected" type="file"/>}
               <input type="file"
                       hidden={true}
                       onChange={selectedPhoto}
                       ref={filePicker}
                       name="file" id="file" 
               />
               <div className='form-btn'>
                  <Button className={'pic-btn btn'}
                          onClick={() => filePicker.current.click()}
                          children={<i title='image' 
                          className="fa-regular fa-image"></i>}
                  />
                  <Button className={'doc-btn btn'}
                          children={<i title='Attach' className="fa-solid fa-paperclip"></i>}
                  />
               </div>
            <div className="submit-btn">
               {user?
               <Button className={'submit'}>
                  Post as {user.result.name}
               </Button>
               :<>
               <Link className={'submit-link'} to={'/auth'}>Login to Post</Link>
               </>}
            </div>
            </div>
         </form>
      </div>
      <div className='community-posts'>
         <PostsContainer/>
      </div>
   </div>
  )
}

export default CommunityHome
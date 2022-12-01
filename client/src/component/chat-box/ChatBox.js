import React, {useState} from 'react'
import './ChatBox.css'
import ChatScroll from "./ChatScroll";

const  ChatBox = ({className}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const[message,setMessage]=useState('')

    const show = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

  return(
      <div className={!show?className:" chat-active"}>
          <div onClick={handleClick} className={show?"chat-box-content content-active":"chat-box-content"}>
              <i className="fa-regular fa-circle-question"></i>
          </div>
          {show?(
              <div className={show?'ask-chat-box ask-question-active':" ask-chat-box"}>
                  <div className={'ask-chat-box-header'}>
                      <div onClick={handleClose} className={'x-icon'}>
                          <i className="fa-regular fa-circle-xmark"></i>
                      </div>
                      <p>Ask A Question</p>
                      <span>Here You can Ask Any Programming Related Question.</span>
                  </div>
                  <div className={'ask-chat-area'} style={{scrollbarWidth:"none"}}>
                      <ChatScroll message={message}/>
                        <form onSubmit={handleSubmit}>
                            <input onChange={(e)=>setMessage(e.target.value)} type={'text'}/>
                           <button type={'submit'}></button>
                        </form>
                  </div>

              </div>
          ): null}

      </div>
  )
}

export default ChatBox
import React, {useRef, useState} from 'react'

const ChatScroll=(props)=>{

    const bottomRef=useRef(null)
    React.useEffect( () => {
        bottomRef.current?.scrollIntoView({behavior: "smooth",block: "end"})
    },[])
    return(
        <div  style={{scrollbarWidth:'none'}}>

            <iframe
                className={'ask-chat-display'}
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/dd497a1a-d515-499f-84ef-94b8b3cb5391">
            </iframe>
                 <h1>{props.message}</h1>

            <div ref={bottomRef}/>
        </div>
    )
}
export default ChatScroll
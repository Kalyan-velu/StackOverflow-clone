import express from "express";
import User from '../models/auth'
import Message from "../models/message.js";
const sendBotMessage=async (req,res)=>{
    const {id:_id}=req.params
    const {messageData}=req.body
    try{
        const user=await User.find({_id})
        if(!user){
            return res.status(400).json({
                message:'UserId is wrong.'
            })
        }
        const {message}= await messageData.messageBody

        if(message==='Hi'||'Hello'||'Hey'||'hello'||'hi'){
            const newMessageData= await Object.assign({},messageData,({botResponse:"Hello"}))
            const userMessage=new Message({...newMessageData})

            res.status(200).json({
                success:true,
                message:userMessage
            })
        }else{

        }

    }catch (e) {
      res.status(500).json({
          message:e
      })
    }
}
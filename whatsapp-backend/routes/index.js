import express from "express";
import {Message} from "../db/dbMessenger.js"


const router = express.Router(); 


router.get('/sync' , async (req , res)=>{
    const messages = await Message.find({})
    res.send(messages);
})

router.post('/new' , (req , res)=>{
    const dbMessage = req.body;
    const newMsg = new Message(dbMessage);
    newMsg.save();
    res.json(newMsg).status(201);
})

export default router;
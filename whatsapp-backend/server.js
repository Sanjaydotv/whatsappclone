import express from "express";
import router from "./routes/index.js"
import mongoose from "mongoose";
import pusher from './pusher/index.js'
import path from 'path'
import cors from 'cors'

//app config
const app = express();

app.use(express.json());
app.use(cors());

//routes
app.use('/messages',router)

app.use(express.static("public"));
app.get('/*',(req , res) =>{
    res.sendFile(path.join(__dirname,'/public/index.html'));
})

app.listen(3001 , ()=>{
    console.log("server is running in port 3001")
})

const connectionURL = 'mongodb+srv://sanjay:sanjay@cluster0.bxwet6a.mongodb.net/whatsappdb'
mongoose.connect(connectionURL , {  dbName:"whatsappdb"
})

const db = mongoose.connection;
db.once('open',()=>{
    console.log(' db connected');

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change",(change)=>{

        if(change.operationType ==="insert"){
            const msgDetails = change.fullDocument;
            pusher.trigger("messages","inserted" , {
                name: msgDetails.name,
                messeage: msgDetails.message,
                time: msgDetails.time,
                received: msgDetails.received
            })
        } else {
            console.log("error triggering pusher")
        }
    })
})
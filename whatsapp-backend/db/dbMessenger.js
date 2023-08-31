import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
    message: String ,
    name: String ,
    time: String ,
    received: Boolean
})

export const Message = mongoose.model('messagecontents' , whatsappSchema);


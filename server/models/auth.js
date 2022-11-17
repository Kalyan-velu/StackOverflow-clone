import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        minlength: [8, 'Password must be at least 8 characters'],
        select: false,
    },
    about:{type:String},
    tags:[{type:String}],
    joinedOn: {type: Date,default: Date.now},
})

export default mongoose.model("User",userSchema)
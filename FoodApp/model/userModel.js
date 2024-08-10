const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true , 'username is required']
        },
    email: {
        type: String,
        required: [true , 'email is required' ],
        unique: true
    },
    password: {
        type: String,
        required:[true , 'password is required']    },

    address:{
        type: String,

        },
    phone: {
        type: String,
        required:[true , 'phone is required']
    },
    usertype: {
        type: String,
        required:[true , 'user type  is required'],
        default:'client',
        enum:['client','admin', 'vendor' , 'driver']
    },
    profile:{
        type: String,
        default: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
    }


}, {Timestamps:true})

//export
module.exports = mongoose.model('user' , userSchema)
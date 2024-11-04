const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    DoctorName:{
        type : String , 
        require : [ true , "please add your name"],
    },
    Speciality:{
        type : String , 
        require : [ true , "please add your Speciality"],
    },
    phoneNumber:{
        type : Number , 
        require : [ true , "please add your phone number"],
    },
    experience:{
        type : String,
        require : [ true , "please add your experience"],
    },
    address:{
        type : String,
        require : [ true , "please add your address"],
    }
},
{
    timestamps : true ,
});
module.exports = mongoose.model("User" , userSchema);
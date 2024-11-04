const express = require("express");
const router = express.Router();
const {
    registerDoctorUser
    // loginDoctorUser
}=require("../controllers/userController");
router.post("/" , registerDoctorUser);
module.exports=router;
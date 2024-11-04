// doctorsDetails.js
const express = require("express");
const { registerDoctor } = require("../controllers/doctorDetailsController");

const router = express.Router();

router.post("/register", registerDoctor);

module.exports = router;
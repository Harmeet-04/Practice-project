const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../model/userModel"); // Corrected variable name to 'User'
require("dotenv").config();

const registerUser = asyncHandler(async (req, res) => {
    const {DoctorName, Speciality, phoneNumber, experience, address} = req.body;

    // Validate all required fields
    if (!DoctorName || !phoneNumber || !password || !Speciality || !address) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if the user already exists
    const userExists = await User.findOne({ phoneNumber });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = await User.create({
        DoctorName,
        Specialiity,
        phoneNumber,
        experience,
        address,
    });
    res.status(201).json({ message: "User registered successfully", user: newUser });
});

module.exports = { registerUser };
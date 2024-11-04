const asyncHandler = require("express-async-handler");
const DoctorDetails = require("../model/doctorDetailsModal");

const registerDoctor = asyncHandler(async (req, res) => {
    const { name, speciality, phoneNumber, experience, address } = req.body;

    // Validate all required fields
    if (!name || !speciality || !phoneNumber || !experience || !address) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Check if the doctor already exists
    const doctorExists = await DoctorDetails.findOne({ phoneNumber });
    if (doctorExists) {
        return res.status(400).json({ message: "Doctor already exists" });
    }

    // Create a new doctor entry
    const newDoctor = await DoctorDetails.create({
        name,
        speciality,
        phoneNumber,
        experience,
        address
    });

    res.status(201).json({ message: "Doctor registered successfully", doctor: newDoctor });
});

module.exports = { registerDoctor };
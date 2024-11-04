const mongoose = require("mongoose");

const doctorDetailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the doctor's name"]
    },
    speciality: {
        type: String,
        required: [true, "Please add the doctor's speciality"]
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please add the doctor's phone number"]
    },
    experience: {
        type: Number,
        required: [true, "Please add the doctor's experience in years"]
    },
    address: {
        type: String,
        required: [true, "Please add the doctor's address"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("DoctorDetails", doctorDetailsSchema);
const mongoose = require("mongoose");

const newsletterSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add Title"]
    },
    author: {
        type: String,
        required: [true, "Please add the Author's Name"]
    },
    date: {
        type: Number,
        required: [true, "Please add Date"]
    },
    imageUrl: {
        type: String,
        required: [true, "Please add ImageURL"]
    },
    description: {
        type: String,
        required: [true, "Please add Newsletter Description"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("newsletterModel", newsletterSchema);
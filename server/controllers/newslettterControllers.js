const asyncHandler = require("express-async-handler");
const newsletter = require("../model/newsletterModel");

const getNewsletter = asyncHandler(async (req, res) => {
    try {
        const data = await newsletter.find({});
        
    } catch (err) {
        return res.status(404).json({err:err.message});
    }
})

const createNewsletter = asyncHandler(async (req, res) => {
    // const { title, authot, date, imageUrl, description } = req.body;
    // if (!title || !auhtor || !date || !imageUrl || !description) {
    //     res.status(400);
    //     throw new Error("Please fill all fields");
    // }
})

module.exports = { getNewsletter, createNewsletter };
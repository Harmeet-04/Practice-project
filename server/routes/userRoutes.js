const express = require("express");
const asyncHandler = require("express-async-handler");
const router = express.Router();
const { validateToken } = require("../middleware/jstMiddleware");
const { registerUser, loginUser, mydetails, } = require("../controllers/userController");

router.get("/details", validateToken, mydetails);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
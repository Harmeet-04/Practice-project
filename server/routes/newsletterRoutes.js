const express = require("express");
const router = express.Router();
const { getNewsletter, createNewsletter } = require("../controllers/newslettterControllers");
const { jwtAuthMiddleware } = require("../middleware/jstMiddleware");

router.get("/", getNewsletter);
router.post("/", createNewsletter);
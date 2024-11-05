const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const path = require("path");
const hbs = require("hbs");
const multer = require("multer");
// const mongoose = require("mongoose");
// const upload = multer({ dest: 'uploads/' });


// env file config
const dotenv = require("dotenv");
dotenv.config();

const users = [
    { name: "asdfghj", age: 20 },
    { name: "fgh", age: 19 },
    { name: "fgh", age: 20 },
];

connectDb();
const app = express();
const port = 2999 || 3000 || 3001;

// hbs - view engine
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get("/home", (req, res) => {
    res.render("home", {
    })
})

app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.get('/', (req, res) => {
    res.send("working");
});

app.get("/home", (req, res) => {
    res.render("home", {
        username: " Harman Dhiman",
        posts: " time pass"
    })
})
app.get("/alluser", (req, res) => {
    res.render("alluser", {
        users: users,
    });
});

// Disk storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

// Uploading
const upload = multer({storage:storage});

// Multer file uplaoding
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log(req.body);
    console.log(req.file);
    return res.redirect("/home");
});

app.use("/api/register", require("./routes/userRoutes"));
app.use("/api/doctor", require("./routes/doctorDetails"));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
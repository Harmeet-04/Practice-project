const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const path = require("path");
const hbs = require("hbs");
// const bycrypt = require("bycrypt");

// env file config
const dotenv = require("dotenv");
dotenv.config();

const users = [
    { name: "Harman Dhiman", age: 20 },
    { name: "Hindveer", age: 19 },
    { name: "Jaikirat", age: 20 },
];

connectDb();
const app = express();
const port = 2999|| 3000 || 3001;

// hbs- view engine
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get("/home", (req, res)=>{
    res.render("home",{
    })
})

app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.get('/', (req, res) => {
    res.send("working");
});

app.get("/home",(req , res)=>{
    res.render("home" , {
       username:" Harman Dhiman",
       posts : " time pass"
    })
})
app.get("/alluser", (req, res) => {
    res.render("alluser", {
        users: users, 
    });
});

app.use("/api/register" , require("./routes/userRoutes"));
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
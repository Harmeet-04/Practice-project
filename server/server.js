const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

// env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// hbs- view engine
app.set('view engine', 'hbs');

app.get("/home", (req, res)=>{
    res.render("home",{
    })
})

// app.get('/users', (req, res)=>{
//     res.render("users",{
//     })
// })
// app.get('/home', (req, res)=>{
//     res.render("home",{
//     })
// })

app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.get('/', (req, res) => {
    res.send("working");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

// env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
const port = 2999|| 3000 || 3001;

// hbs- view engine
app.set('view engine', 'hbs');

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

app.get("/users",(req,res)=>{
    res.render("users",{

        people:[
            {
                username:"abc",
                age:20
            },
            {
                username:"xyz",
                age:21
            }
        ]

    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
require("dotenv").config()


//mmiddlewares
app.use(bodyParser.json());
app.use("/api", userRoute)

//PORT
const PORT = process.env.PORT || 4000


// Try to connect mongodb if connected successfully then start server 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        console.log("Databse succesfully connected");  
        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        })
    }).catch((err) => console.log(err))




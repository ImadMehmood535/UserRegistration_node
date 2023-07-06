const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
require("dotenv").config()





//middleware

app.use(bodyParser.json());
app.use("/api", userRoute)


const PORT = process.env.PORT || 4000
//connect to mongob and start server 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        console.log("Databse succesfully connected");  
        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        })
    }).catch((err) => console.log(err))




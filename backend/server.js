const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const bodyParser = require("body-parser");
const cors = require("cors")
require("dotenv").config()


 
//allowing ReactJs to connect to API
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


//middleware

app.use(bodyParser.json());
app.use("/api", userRoute)


const PORT = process.env.PORT || 4000
//connect to monogoDB and then create server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        console.log("Databse succesfully connected");  
        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        })
    }).catch((err) => console.log(err))




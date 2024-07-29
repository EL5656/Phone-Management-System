const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');
const cors = require('cors');

connectDb();
const app=express();
app.use(cors({
    origin: 'http://localhost:3000' // Allow requests only from this origin
  }));

const port = process.env.PORT;

//middleware
app.use(express.json())//parser to parse the data string from client to server
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});




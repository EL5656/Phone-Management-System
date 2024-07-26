const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');

connectDb();
const app=express();

const port = process.env.PORT;

//middleware
app.use(express.json())//parser to parse the data string from client to server
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});




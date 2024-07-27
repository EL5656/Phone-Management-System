const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"]
    },
    email: {
        type: String,
        required: [true, "Please add the user email"],
        unique: [true, "Email address has been taken"]
    },
    mobile: {
        type: String,
        required: [true, "Please add the user phone"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    },
},
    {
        timestamps: true,
    }
)
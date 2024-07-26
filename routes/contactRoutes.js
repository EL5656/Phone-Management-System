const express = require("express");
const router = express.Router();
const {
    getContact, 
    createContact, 
    getContactById, 
    updateContact,
    deleteContanct
} = require("../controllers/contactController")

router.route("/").get(getContact).post(createContact)

router.route("/:id").get(getContactById).put(updateContact).delete(deleteContanct)

module.exports = router;
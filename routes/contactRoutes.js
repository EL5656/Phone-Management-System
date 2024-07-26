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

router.route("/:id").get(getContactById)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContanct)

module.exports = router;
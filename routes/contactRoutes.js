const express = require("express");
const router = express.Router();
const {
    getContact, 
    createContact, 
    getContactById, 
    updateContact,
    deleteContanct
} = require("../controllers/contactController")
const validateToken = require('../middleware/validateTokenHandler');

//API Endpoint
router.use(validateToken);
router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContactById).put(updateContact).delete(deleteContanct);

module.exports = router;
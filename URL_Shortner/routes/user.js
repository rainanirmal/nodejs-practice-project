const express = require("express");
const {handleUserSignUp , handleSignup} = require("../controller/user");

const router = express.Router();

router.post("/" , handleUserSignUp);
router.get("/signup" , handleSignup);

module.exports = router;
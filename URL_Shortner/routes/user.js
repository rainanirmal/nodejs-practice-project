const express = require("express");
const {handleUserSignUp , handleSignup , handleLogin , handleUserLogin} = require("../controller/user");

const router = express.Router();

router.post("/" , handleUserSignUp);
router.get("/signup" , handleSignup);
router.get("/login" , handleLogin);
router.post("/login" , handleUserLogin);

module.exports = router;
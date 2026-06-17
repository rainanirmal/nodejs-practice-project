const express = require("express");
const {handleGenerateURL} = require("../controller/url");
const router = express.Router();

router.post('/' , handleGenerateURL);

module.exports = router;
const express = require("express");
const {handleGenerateURL , handleRedirectURL} = require("../controller/url");
const router = express.Router();

router.post('/' , handleGenerateURL);
router.get('/:shortId' , handleRedirectURL);

module.exports = router;
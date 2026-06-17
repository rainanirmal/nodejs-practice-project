const express = require("express");
const {handleGenerateURL , handleRedirectURL , handleGenerateAnalytics} = require("../controller/url");
const router = express.Router();

router.post('/' , handleGenerateURL);
router.get('/:shortId' , handleRedirectURL);
router.get('/analytics/:shortId' , handleGenerateAnalytics);

module.exports = router;
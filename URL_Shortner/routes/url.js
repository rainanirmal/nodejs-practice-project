const express = require("express");
const {handleGenerateURL , handleRedirectURL , handleGenerateAnalytics , handleTest} = require("../controller/url");
const router = express.Router();

router.get('/' , handleTest);
router.post('/URL' , handleGenerateURL);
router.get('/:shortId' , handleRedirectURL);
router.get('/analytics/:shortId' , handleGenerateAnalytics);

module.exports = router;
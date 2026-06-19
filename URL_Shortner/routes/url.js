const express = require("express");
const {handleGenerateURL , handleRedirectURL , handleGenerateAnalytics , handleTest} = require("../controller/url");
const { restrictToLoggedUserOnly } = require("../middleware/auth");
const router = express.Router();

router.get('/' , restrictToLoggedUserOnly , handleTest);
router.post('/URL', restrictToLoggedUserOnly , handleGenerateURL);
router.get('/analytics/:shortId' ,  restrictToLoggedUserOnly , handleGenerateAnalytics);
router.get('/:shortId' , handleRedirectURL);

module.exports = router;
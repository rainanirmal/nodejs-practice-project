const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateURL(request , response) {

    const body = request.body;
    const shortID = shortid.generate();

    if(!body.url) {
        return response.json({ msg : "URL is required"});
    }

    await URL.create({
        shortId : shortID,
        redirectURL : body.url,
        visitHistory : [],
    })

    return response.json({
        shortId : shortID,
    })
}

module.exports = {
    handleGenerateURL,
}
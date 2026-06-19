const shortid = require("shortid");
const URL = require("../models/url");
const { all } = require("../routes/url");

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
        createdBy : request.user._id,
    })

    return response.render("home" , {
        shortId : shortID,
    });
}

async function handleRedirectURL(request , response) {
    
    const shortId = request.params.shortId;

    const entry = await URL.findOne({
        shortId,
    });

    if(!entry) {
        return response.json({
            msg : "Short URL not found",
        });
    }

    entry.visitHistory.push({
        timestamp : Date.now(),
    });

    await entry.save();

    return response.redirect(entry.redirectURL);

}

async function handleGenerateAnalytics(request , response) {

    const shortId = request.params.shortId;

    const entry = await URL.findOne({
        shortId,
    });

    if(!entry) {
        return response.json({
            msg : "Short URL not found",
        });
    }

    return response.json({
        totalClicks : entry.visitHistory.length ,
        analytics : entry.visitHistory,
    });
}

async function handleTest(request , response) {
    const allUsers = await URL.find({
        createdBy: request.user._id,
    });
    return response.render("home" , {
        urls : allUsers,
    });
}

module.exports = {
    handleGenerateURL,
    handleRedirectURL,
    handleGenerateAnalytics,
    handleTest,
}
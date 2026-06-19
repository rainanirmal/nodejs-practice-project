const { getUser } = require("../service/auth");

async function restrictToLoggedUserOnly(request , response , next) {

    const userID = request.cookies?.uid;

    if(!userID) {
        return response.redirect("/user/login");
    }

    const user = getUser(userID);

    if(!user) {
        return response.redirect("/user/login");
    }

    request.user = user;
    next();
}

module.exports = {
    restrictToLoggedUserOnly,
};
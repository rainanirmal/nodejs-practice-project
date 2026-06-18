const USER = require("../models/user");

async function handleUserSignUp(request , response) {
    const body = request.body;

    await USER.create({
        name : body.name,
        email : body.email ,
        password : body.password,
    });

    return response.render("home");
}

async function handleSignup(request , response) {
    
    return response.render("signup");
}

module.exports = {
    handleUserSignUp,
    handleSignup,
};
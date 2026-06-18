const USER = require("../models/user");

async function handleUserSignUp(request , response) {
    const body = request.body;

    await USER.create({
        name : body.name,
        email : body.email ,
        password : body.password,
    });

    return response.redirect("/");
}

async function handleSignup(request , response) {
    
    return response.render("signup");
}

async function handleUserLogin(request , response) {
    const { email , password } = request.body;

    const user = await USER.findOne({email , password});

    if(!user) {
        return response.render("login" , {
            error : "Invalid email or password",
        });
    }

    return response.redirect("/");
}

async function handleLogin(request , response) {
    
    return response.render("login");
}

module.exports = {
    handleUserSignUp,
    handleSignup,
    handleLogin,
    handleUserLogin,
};
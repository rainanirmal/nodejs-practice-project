const USER = require("../models/user");
const {v4 : uuidv4} = require("uuid");
const {setUser} = require("../service/auth");

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

    const sessionId = uuidv4();
    setUser(sessionId , user);

    response.cookie("uid" , sessionId);

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
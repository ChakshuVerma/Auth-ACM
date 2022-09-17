const LogoutHandler = (req, res) => {
    console.log('Logout');
    res.clearCookie("jwtoken", {path: "/"});
    res.status(201).json({message: "User logged out"});
}

module.exports = {LogoutHandler};
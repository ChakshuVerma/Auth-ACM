const DashboardHandler = (req, res) =>{
    res.status(201).json({username: req.username, message: "Welcome to dashboard"});
}

module.exports = {DashboardHandler};
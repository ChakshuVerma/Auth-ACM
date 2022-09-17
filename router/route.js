const express = require('express');
const router = express.Router();
const {RegisterHandler} = require('./Register.js')
const {LoginHandler} = require('./Login.js')
const {LogoutHandler} = require('./Logout.js')
const {DashboardHandler} = require('./Dashboard.js')
const authenticate = require('../middleware/authenticate')

router.post('/login', LoginHandler);

router.post('/register', RegisterHandler);

router.get('/logout', LogoutHandler);

router.get('/dashboard', authenticate, DashboardHandler);


module.exports = router;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

 const LoginHandler = async(req, res) => {
    try{
        // Retrieve email and password from body of the request
        let {email, password} = req.body;
        // Check whether email and password are empty
        email = email.trim();
        password = password.trim();
        if(!email || !password){
            return res.status(400).json({error: 'Please enter all the fields'});
        }  
        
        // Find user with the given email
        const userLogin = await User.findOne({email: email});
        // If user is found
        if(userLogin){
            // compare passwords
            const passwordMatch = await bcrypt.compare(password, userLogin.password);
            // If password is matched then sign the jwt and store it in cookies
            if(passwordMatch){
                const userID = userLogin._id;
                const token = jwt.sign({_id: userID}, process.env.SECRET_KEY, {expiresIn: "30d"});
                res.cookie("jwtoken", token, {expiresIn: "30d", httpOnly: true});
                res.status(201).json({message: 'Login successful'});   
            }
            else{
                return res.status(400).json({error: 'Invalid credentials'});    
            }
        }
        else{
            return res.status(400).json({error: 'Invalid credentials'});
        }
    }
    catch(err){
        console.log('Login error: '+err);
    }

}

module.exports = {LoginHandler}
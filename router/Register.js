const User = require('../model/userSchema');


const RegisterHandler = async(req, res) => {

    // Retrieve data from body of the request
    let {username, email, phone, password, cpassword} = req.body;
    username = username.trim();
    email = email.trim();
    phone = phone.trim();
    password = password.trim();
    cpassword = cpassword.trim();

    // Check if some field is empty
    if(!username || !email || !phone || !password || !cpassword){
        return res.status(400).json({error: 'Please enter all the fields'});
    }

    try {
        // If password is different from confirmed password
        if(password !== cpassword){
            return res.status(400).json({error: 'Passwords do not match'});
        }
        // Check for existing user(by email)
        const emailExist = await User.findOne({email});
        // If user already exists
        if(emailExist){
            return res.status(400).json({error: 'Email is already registered'});
        }
        const usernameExist = await User.findOne({username});
        if(usernameExist){
            return res.status(400).json({error: 'Username is already registered'});
        }
        
        const user =  new User({username, phone, email, password});
        // save the user
        await user.save();
        return res.status(201).json({message: 'User registered successfully'});

    } catch (err) {
        console.log('Registration error: '+err);
    }

}


module.exports = {RegisterHandler}
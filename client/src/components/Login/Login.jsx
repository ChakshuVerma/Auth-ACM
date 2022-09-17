import './Login.css';
import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Navbar from '../common/navbar/Navbar';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FaMailBulk, FaLock} from 'react-icons/fa'


const Login = () =>{
    const navigate = useNavigate();
    const NavbarContents = [];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const IconStyle = {
        height: '30', 
        width: '30',   
        marginRight: '15px', 
        display: 'inline',
        color: 'white',
    };

    const ErrorToast = (errorMsg) => {
        toast.error(errorMsg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 4000
        });
    }

    const SuccesToast = (succesMsg) => {
        toast.success(succesMsg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 500
        });
    }

    const LoginUser = async (e) =>{
        e.preventDefault();     // So that the form won't get cleared when the user click on submit(this is form's default behaviour)
        
        const res = await fetch('/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        });

        const data = await res.json();
        
        // 201 means success
        if(!data || res.status !== 201){
            ErrorToast(data.error);
            console.clear();
        }
        else{
            SuccesToast(data.message);
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000)
        }
    }

    return(
        <>
            <ToastContainer style={{fontSize:"2rem"}} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} limit={2} theme={"dark"} pauseOnFocusLoss={false} draggable pauseOnHover={false}/>
            <div className="outer-container">
                <Navbar contents={NavbarContents}/>
                <div className="login-container">
                    <div className="center-div">
                        <h1>Login</h1>
                        <div className="form-container">
                            <form method='POST' onSubmit={LoginUser}>
                                <div className="input-div">
                                    <FaMailBulk style={IconStyle}/>
                                    <input value={email} name='email' required type="email" autoComplete="off" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                                </div>
                                <div className="input-div">
                                    <FaLock style={IconStyle}/>
                                    <input value={password} name='password' required type="password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                                </div>
                                
                                <div className="submit-div">
                                    <input type="submit" value="Sign In"></input>
                                    <Link to="/register">New User?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;

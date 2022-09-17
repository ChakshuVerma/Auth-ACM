import React from 'react'
import './homepage.css'
import Navbar from '../common/navbar/Navbar'
import { Link } from 'react-router-dom'

const Homepage = () => {
    
    const NavbarContents = [];
    const appName = `Auth.`
  return (
    <div className="outer-container">
        <Navbar contents={NavbarContents}/>
        <div className="homepage-container">
            <div className="app-name-container">
                <h1>{appName}</h1>
            </div>
            <div className="button-container">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Homepage;
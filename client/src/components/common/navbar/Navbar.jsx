import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css'

const Navbar = ({contents}) => {
    const appName = "Auth.";
    
    return(
        <nav className="navbar">
            {contents[0]!=='disableHomeLink'?<NavLink to="/" className="app-name">{appName}</NavLink>:<h2 className='app-name'>{appName}</h2>}
            <div className="components">
            <ul>
                {
                    contents.map((component, index)=>{
                        return <li key={index}><NavLink to={component.link}>{component.name}</NavLink></li>
                    })
                }
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
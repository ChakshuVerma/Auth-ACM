import React from 'react';
import './404.css'
import {NavLink} from 'react-router-dom';

const PageNotFound = () =>{
    
    return(
        <>
        <div className="outer-container">
            <div className="container-404">
                <div className="text">
                    <h2>Page not found</h2>
                </div>
                <div className="go-back-button">
                    <NavLink to='/'>Go back</NavLink>
                </div>
            </div>
        </div>
        </>
    );
}

export default PageNotFound;
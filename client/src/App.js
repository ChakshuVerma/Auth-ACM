import React from 'react'
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import PageNotFound from './components/404/404';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Logout from './components/common/Logout'
import {Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <>
        <Routes>
            <Route exact path ="/" element={<Homepage/>}/>
            <Route exact path ="/login" element={<Login/>}/>
            <Route exact path ="/register" element={<Register/>}/>
            <Route exact path ="/dashboard" element={<Dashboard/>}/>
            <Route exact path ="/logout" element={<Logout/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </>
  )
}

export default App;

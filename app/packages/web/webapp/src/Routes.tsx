import React from 'react'
import {Route ,Routes } from 'react-router-dom';
import SignUp from './components/signup';
import Home from './components/homepage'
import Login from './components/login';
import UserHome from './components/userhome';
import Dashboard from './components/dashboard';

function Approute() {
    return (               
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp />}/>
                <Route path="/userHome" element={<UserHome />}/>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Routes>           
    );
}
export default Approute;




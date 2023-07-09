import React from "react";
import LogInForm from './pages/Login'
import SignUpForm from './pages/Signup'
import { BrowserRouter, Routes, Route } from "react-router-dom";



const  RouteSwitch = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInForm/>} />
          <Route path="/signup" element={<SignUpForm/>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
export default RouteSwitch;
  /*  <Route path="/:id" element={<dashbourd />} />*/
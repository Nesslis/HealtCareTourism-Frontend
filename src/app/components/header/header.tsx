import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import LoginPage from "../../screen/auth/login/login.tsx";
import RegisterPage from "../../screen/auth/register/register.tsx";
import Home from "../../screen/home/home.tsx";
import Clinics from "../../screen/clinics/clinics.tsx";
import Contact from "../../screen/contact/contact.tsx";
import MapPage from "../../screen/hotels/hotels.tsx";

import './header.css';

const routes = createRoutesFromElements(
  <Route path="/" element={<Home />}>
    <Route path="../auth/login/login.tsx" element={<LoginPage />} />
    <Route path="../auth/register/register.tsx" element={<RegisterPage />} />
    <Route path="../../screen/clinics/clinics.tsx" element={<Clinics/>} />
    <Route path="../../screen/hotels/hotels.tsx" element= {<MapPage/>} />
  </Route>
);

// Creating router
const router = createBrowserRouter(routes);

export function Header() {
    return (
      <header className="Header">
      <nav className="navbar">
        <div className="left-links">
        <img src={'./softwareLogo.png'} alt="Logo" className="logo" style={{background: 'transparent'}} />
            <a href="/">Home</a>
            <a href="/clinics">Clinics</a>
            <a href="/hotels">Hotels</a>
            <a href="/contact">Contact</a>
        </div>
          <div className="right-links">
            <a href="/login" className="login-button" >Login</a> 
            <a href="/register" className="register-button">Register</a> 
        </div>
      </nav>
    </header>
    );
  }
  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
  );
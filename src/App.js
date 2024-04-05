import React from 'react';
import './App.css'; 
import Home from './app/screen/home/home.tsx';
import RegisterPage from './app/screen/auth/register/register.tsx';
import LoginPage from './app/screen/auth/login/login.tsx';
import Clinics from './app/screen/clinics/clinics.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Header } from './app/components/header/header.tsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/clinics' element={<Clinics/>} />
      </Routes>
    </Router>
  );
}

export default App;

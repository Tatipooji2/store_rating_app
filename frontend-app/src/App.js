import React from 'react';
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/navbar';
import Admin from './components/admin';
import User from './components/user';
import Owner from './components/owner';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
          <Routes>
          <Route path="/owner" element={<Owner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navbar/>}/>
            </Routes>
    </Router>
  );
}

export default App;

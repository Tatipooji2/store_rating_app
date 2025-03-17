import React from 'react';
import Login from './components/login';
import Register from './components/register';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navbar></Navbar>}/>
            </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Item from './components/Item';
import {FaHome} from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaPager } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
  
  return (
    <div>
       <div className='headings'>
        <h1>TravelMedia.in</h1>
        <div className='icons'>
        <FaHome />
        <FaBell/>
        <FaPager/>
        <FaUser/>
        </div>
       </div> 
        <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/item/:id" element={<Item/>} />
           </Routes>
        </Router>
    </div>
  );
}

export default App;

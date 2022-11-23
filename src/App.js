import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Login from './Components/Login';
import Make from './Components/Make';
import User from './Components/User';




function App() {
  return (
    <>
      <Nav />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/make' element={<Make />}/>
          <Route path='/user' element={<User />}/>
        </Routes>
    </>
  );
}

export default App;

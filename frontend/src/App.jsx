// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home'; // Import your Home component

import Navbars from './Components/commoncomponents/Navbar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';


const App = () => {
  return (
    
    <Router>
      <Navbars />
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/login" element={<Login/>}></Route>
</Routes>

    </Router>
    
  );
};

export default App;


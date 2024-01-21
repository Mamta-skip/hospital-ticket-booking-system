// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home'; // Import your Home component
import About from './Components/About'; // Import your About component
import Navbars from './Components/commoncomponents/Navbar';


const App = () => {
  return (
    
    <Router>
      <Navbars />
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
</Routes>

    </Router>
    
  );
};

export default App;


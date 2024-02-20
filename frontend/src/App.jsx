// // App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Components/Home';
// import Navbars from './Components/commoncomponents/Navbar.jsx';
// import Register from './Components/Register/Register';
// import Login from './Components/Login/Login';
// import AdminAppointmentForm from './Components/Adminsidecode/Createtime';
// import UserAppointmentForm from './Components/book/Book';
// import AdminRoute from './AdminRoute.jsx';// Import AdminRoute
// import { AuthProvider } from './Components/AuthContext.jsx';

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbars/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/book" element={<UserAppointmentForm />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <AdminRoute path="/create" element={<AdminAppointmentForm />} />
         
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbars from './Components/commoncomponents/Navbar';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import AdminAppointmentForm from './Components/Adminsidecode/Createtime';
import UserAppointmentForm from './Components/book/Book';
import AdminRoute from './AdminRoute';
import { AuthProvider } from './Components/AuthContext';


const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/create"
            element={<AdminRoute element={<AdminAppointmentForm />} />}
          />
         
          <Route path="/book" element={<UserAppointmentForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;



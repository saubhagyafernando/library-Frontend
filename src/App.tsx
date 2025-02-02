import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/Contactus'; 
import SearchBook from './Components/SearchBook';
import AddMember from './Components/AddMember';
import AddBook from './pages/AddBook';
import UpdateBook from './Components/UpdateBook';
import { AuthProvider } from './Utils/AuthContext';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AdminLoginSignUp from './Components/AdminLoginSignUp';
import UserLoginSignUp from './Components/UserLoginSignUp';
// import './assets/Library1.jpg';
// import './assets/Library2.jpg';
// import './assets/Library3.jpg';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login-signup" element={<UserLoginSignUp />} />
        {/* Admin Pages (Only Accessible If Logged In) */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/search-book" element={<SearchBook />} />
        
        <Route path="/admin-login" element={<AdminLoginSignUp />} />
        
        {/* Admin Pages (Only Accessible If Logged In) */}
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/update-book" element={<UpdateBook />} />
        <Route path="/add-member" element={<AddMember />} />
      </Routes>
    </Router>
  );
};

export default App;


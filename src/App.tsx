import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SearchBook from './Components/SearchBook';
import AddMember from './Components/AddMember';
import AddBook from './pages/AddBook';
import UpdateBook from './Components/UpdateBook';
import { AuthProvider } from './Utils/AuthContext';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AdminLoginSignUp from './Components/AdminLoginSignUp';
import UserLoginSignUp from './Components/UserLoginSignUp';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="flex-grow-1 main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<div>Contact Us Page</div>} />
              <Route path="/search-book" element={<SearchBook />} />
              <Route path="/admin-login-signup" element={<AdminLoginSignUp />} />
              <Route path="/user-login-signup" element={<UserLoginSignUp />} />
              <Route path="/add-member" element={<AddMember />} />
              <Route path="/add-book" element={<AddBook />} />
              <Route path="/update-book" element={<UpdateBook />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

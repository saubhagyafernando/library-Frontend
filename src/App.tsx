import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SearchBook from './Components/SearchBook';
import AddMember from './Components/AddMember';
import AddBook from './pages/AddBook'; // Assuming you have this component
import UpdateBook from './Components/UpdateBook'; // Assuming you have this component
import { AuthProvider, useAuth } from './Utils/AuthContext';
import Navbar from './pages/Navbar'; // Import the new Navbar component
import Footer from './pages/Footer';
import AdminLoginSignUp from './Components/AdminLoginSignUp';
import UserLoginSignUp from './Components/UserLoginSignUp';

const ProtectedRoute = ({ children, adminOnly }: { children: JSX.Element, adminOnly?: boolean }) => {
  const { isAdmin, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/user-login-signup" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/admin-login-signup" />;
  }

  return children;
};

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
              <Route path="/contact" element={<div>Contact Us Page</div>} /> {/* Add Contact Us Page */}
              <Route path="/search-book" element={<SearchBook />} />
              <Route path="/admin-login-signup" element={<AdminLoginSignUp />} />
              <Route path="/user-login-signup" element={<UserLoginSignUp />} />
              <Route path="/add-member" element={<AddMember />} />
              <Route path="/add-book" element={<ProtectedRoute adminOnly={true}><AddBook /></ProtectedRoute>} />
              <Route path="/update-book" element={<ProtectedRoute adminOnly={true}><UpdateBook /></ProtectedRoute>} />
            </Routes>
          </div>
          <Footer /> {/* Add Footer here */}
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SearchBook from './Components/SearchBook';
import AddMember from './Components/AddMember';
import AddBook from './Components/AddBook';
import UpdateBook from './Components/UpdateBook'; // Assuming you have this component
import { AuthProvider, useAuth } from './Utils/AuthContext';
import Navbar from './pages/Navbar'; // Import the new Navbar component

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/login-signup" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Add Navbar here */}
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<div>Contact Us Page</div>} /> {/* Add Contact Us Page */}
            <Route path="search-book" element={<SearchBook />} />
            <Route path="login-signup" element={<LoginSignUp />} />
            <Route
              path="add-member"
              element={
                <ProtectedRoute>
                  <AddMember />
                </ProtectedRoute>
              }
            />
            <Route
              path="add-book"
              element={
                <ProtectedRoute>
                  <AddBook />
                </ProtectedRoute>
              }
            />
            <Route
              path="update-book"
              element={
                <ProtectedRoute>
                  <UpdateBook />
                </ProtectedRoute>
              }
            />

        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

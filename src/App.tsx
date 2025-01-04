import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import SearchBook from './Components/SearchBook';
import AddMember from './Components/AddMember';
import AddBook from './Components/AddBook';
import { AuthProvider, useAuth } from './Utils/AuthContext';





const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAdmin } = useAuth();
  return isAdmin ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="search-book" element={<SearchBook />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

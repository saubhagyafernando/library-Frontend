import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LibraryNotice from './pages/LibraryNotice';
import VisionAndMission from './pages/VisionAndMission';
import LibraryHours from './pages/LibraryHours';
import LibraryStaff from './pages/LibraryStaff';
import ContactUs from './pages/Contactus'; 
import SearchBook from './Components/SearchBook';
import AddMember from './Components/AddMember';
import UpdateMember from './Components/UpdateMember';
import AddAdmin from './Components/AddAdmin';
import UpdateAdmin from './Components/UpdateAdmin';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import UpdateList from './Components/UpdateList';
import AdminList from './Components/AdminList';
import MemberList from './Components/MemberList';
import { AuthProvider } from './Utils/AuthContext';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import AdminLoginSignUp from './Components/AdminLoginSignUp';
import UserLoginSignUp from './Components/UserLoginSignUp';
import './assets/Library1.jpg';
import './assets/Library2.jpg';
import './assets/Library3.jpg';
import './assets/library.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <div className="flex-grow-1 main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/library-notice" element={<LibraryNotice />} />
              <Route path="/vision-and-mission" element={<VisionAndMission />} />
              <Route path="/library-hours" element={<LibraryHours />} />
              <Route path="/library-staff" element={<LibraryStaff />} />
              <Route path="/contact" element={<ContactUs />} /> {/* Updated to use the ContactUs component */}
              <Route path="/search-book" element={<SearchBook />} />
              <Route path="/admin-login-signup" element={<AdminLoginSignUp />} />
              <Route path="/user-login-signup" element={<UserLoginSignUp />} />
              <Route path="/add-member" element={<AddMember />} />
              <Route path="/update-member/:userID" element={<UpdateMember />} />
              <Route path="/add-admin" element={<AddAdmin />} />
              <Route path="/update-admin/:adminId" element={<UpdateAdmin />} />
              <Route path="/add-book" element={<AddBook />} />
              <Route path="/update-book/:bookID" element={<UpdateBook />} />
              <Route path="/update-list" element={<UpdateList />} />
              <Route path="/admin-list" element={<AdminList />} />
              <Route path="/member-list" element={<MemberList />} />
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

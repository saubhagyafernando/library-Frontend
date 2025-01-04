import { Outlet, Link } from 'react-router-dom';
import { useAuth } from '../Utils/AuthContext';


const Layout = () => {
  const { isAdmin, logout } = useAuth();

  return (
    <div>
      <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
        <h1>Library Management System</h1>
        <ul style={{ display: 'flex', listStyle: 'none', gap: '10px' }}>
          <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link></li>
          <li><Link to="/search-book" style={{ color: '#fff', textDecoration: 'none' }}>Search Book</Link></li>
          {isAdmin && (
            <>
              <li><Link to="/add-member" style={{ color: '#fff', textDecoration: 'none' }}>Add Member/Admin</Link></li>
              <li><Link to="/add-book" style={{ color: '#fff', textDecoration: 'none' }}>Add Book</Link></li>
            </>
          )}
          <li>
            {isAdmin ? (
              <button onClick={logout} style={{ background: 'red', color: '#fff', border: 'none' }}>
                Logout
              </button>
            ) : (
              <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
            )}
          </li>
        </ul>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

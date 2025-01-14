import './AdminLogin.css'; // Import the specific CSS file for this component

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

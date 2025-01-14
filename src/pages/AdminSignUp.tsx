import './AdminSignUp.css'; // Import the specific CSS file for this component

const AdminSignUp = () => {
  return (
    <div className="admin-signup">
      <h1>Admin Sign-Up</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default AdminSignUp;

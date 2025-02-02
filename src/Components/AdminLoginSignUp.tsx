import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Utils/AuthContext";
import "./LoginSignUp.css";

// Predefined admin email and password (you should replace this with backend authentication)
const ADMIN_EMAIL = "admin@library.com";
const ADMIN_PASSWORD = "Admin@123";
const GENERATED_OTP = "678901"; // Simulating an OTP

const AdminLoginSignUp: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // Step 1: Login, Step 2: OTP verification
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setStep(2); // Move to OTP verification step
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleOTPVerification = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (otp === GENERATED_OTP) {
      login(true); // Log in as admin
      localStorage.setItem("isAdmin", "true");
      navigate("/add-book"); // Redirect to admin dashboard
      window.location.reload(); // Refresh navbar to show admin options
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      {error && <p className="error">{error}</p>}

      {step === 1 ? (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Next</button>
        </form>
      ) : (
        <form onSubmit={handleOTPVerification}>
          <p>OTP has been sent to your email.</p>
          <div>
            <label>Enter OTP:</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default AdminLoginSignUp;

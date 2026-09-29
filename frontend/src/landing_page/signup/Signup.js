import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3002/api/auth/signup", {
        name,
        email,
        password,
      });

      alert("Signup successful. Please login.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Create Account</h1>
        <p style={styles.subtitle}>Create your Zerodha Clone account</p>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            style={styles.input}
          />

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p style={styles.bottomText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "120px 20px 60px",
  },
  card: {
    width: "100%",
    maxWidth: "450px",
    padding: "35px",
    border: "1px solid #e0e0e0",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 5px 20px rgba(0,0,0,0.06)",
  },
  heading: { marginBottom: "8px", color: "#424242" },
  subtitle: { color: "#666", marginBottom: "25px" },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "13px 14px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "13px",
    border: "none",
    borderRadius: "5px",
    background: "#387ed1",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
  bottomText: { marginTop: "18px", textAlign: "center" },
};

export default Signup;

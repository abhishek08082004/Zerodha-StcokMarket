import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post("https://zerodha-stcokmarketbackend.onrender.com/api/auth/login", {
          email: email.trim(),
          password: password,
        }
      );

      const token = response.data.token;

      if (!token) {
        alert("Token not received from server");
        return;
      }

      // Save user information
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      // IMPORTANT:
      // Dashboard is on port 3001.
      // Token is passed once through URL.
      window.location.replace(
        `http://localhost:3001/?token=${encodeURIComponent(
          token
        )}`
      );
    } catch (error) {
      console.error("LOGIN ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Login failed. Please check email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Login</h1>

        <p style={styles.subtitle}>
          Login to your Zerodha Clone account
        </p>

        <form onSubmit={handleLogin}>
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
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            style={styles.input}
          />

          <button
            type="submit"
            disabled={loading}
            style={styles.button}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={styles.bottomText}>
          Don't have an account?{" "}
          <Link to="/signup">Signup</Link>
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

  heading: {
    marginBottom: "8px",
    color: "#424242",
  },

  subtitle: {
    color: "#666",
    marginBottom: "25px",
  },

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

  bottomText: {
    marginTop: "18px",
    textAlign: "center",
  },
};

export default Login;
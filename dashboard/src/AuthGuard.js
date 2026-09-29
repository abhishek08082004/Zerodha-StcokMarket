import React, { useEffect, useState } from "react";
import axios from "axios";

function AuthGuard({ children }) {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // URL se token nikalo
        const params = new URLSearchParams(
          window.location.search
        );

        const tokenFromUrl = params.get("token");

        // Agar login se token aaya hai
        if (tokenFromUrl) {
          localStorage.setItem(
            "authToken",
            tokenFromUrl
          );

          // URL se token remove
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }

        // Token URL se ya localStorage se
        const token =
          tokenFromUrl ||
          localStorage.getItem("authToken");

        // Token nahi hai
        if (!token) {
          window.location.replace(
            "http://localhost:3000/login"
          );
          return;
        }

        // Backend se token verify
        await axios.get(
          "http://localhost:3002/api/auth/verify",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Authentication successful
        setAuthenticated(true);
      } catch (error) {
        console.error(
          "AUTHENTICATION ERROR:",
          error
        );

        localStorage.removeItem("authToken");
        localStorage.removeItem("user");

        window.location.replace(
          "http://localhost:3000/login"
        );
      } finally {
        setChecking(false);
      }
    };

    checkAuthentication();
  }, []);

  // Jab tak authentication check ho raha hai
  if (checking) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        Checking login...
      </div>
    );
  }

  // Login nahi hai
  if (!authenticated) {
    return null;
  }

  // Login hai
  return children;
}

export default AuthGuard;
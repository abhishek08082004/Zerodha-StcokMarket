
import React, { useEffect, useState } from "react";
import axios from "axios";

function AuthGuard({ children }) {
  const [checking, setChecking] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const tokenFromUrl = params.get("token");

        // Login se token aaya hai
        if (tokenFromUrl) {
          localStorage.setItem("authToken", tokenFromUrl);

          // URL se token hata do
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname
          );
        }

        // URL token ya saved token
        const token =
          tokenFromUrl || localStorage.getItem("authToken");

        // Token nahi mila
        if (!token) {
          window.location.replace(
            "https://zerodha-stcokmarketfrontend.onrender.com/login"
          );
          return;
        }

        // Backend se token verify
        const response = await axios.get(
          "https://zerodha-stcokmarketbackend.onrender.com/api/auth/verify",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("AUTH SUCCESS:", response.data);

        setAuthenticated(true);
      } catch (error) {
        console.error(
          "AUTHENTICATION ERROR:",
          error.response?.data || error.message
        );

        localStorage.removeItem("authToken");
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.replace(
          "https://zerodha-stcokmarketfrontend.onrender.com/login"
        );
      } finally {
        setChecking(false);
      }
    };

    checkAuthentication();
  }, []);

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

  if (!authenticated) {
    return null;
  }

  return children;
}

export default AuthGuard;


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import AuthGuard from "./AuthGuard";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthGuard>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </AuthGuard>
    </BrowserRouter>
  </React.StrictMode>
);

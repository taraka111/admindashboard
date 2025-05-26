import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar"; // Ensure correct path

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

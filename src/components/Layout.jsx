import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const Layout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
      <h2>Footer</h2>
    </div>
  );
};

export default Layout;

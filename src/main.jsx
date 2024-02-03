import React from "react";
import ReactDOM from "react-dom/client";
import RouterApp from "./config/RouterApp.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={RouterApp} />
);

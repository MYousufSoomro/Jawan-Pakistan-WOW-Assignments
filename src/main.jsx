import React from "react";
import ReactDOM from "react-dom/client";
import RouterApp from "./config/RouterApp";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./config/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={RouterApp} />
    </Provider>
  </React.StrictMode>
);

import Home from "../screens/Home";
import Login from "../screens/Login";
import Product from "../screens/Product";
import NotFound from "../screens/NotFound";
import Dashboard_Profile from "../screens/Dashboard/Dashboard_Profile";
import Dashboard_Settings from "../screens/Dashboard/Dashboard_Settings";
import Dashboard_Home from "../screens/Dashboard/Dashboard_Home";

const RoutesList = [
  { path: "", component: <Home /> },
  { path: "login", component: <Login /> },
  { path: "products/:id", component: <Product /> },
  { path: "*", component: <NotFound /> },
];

const NestedRoutes_Dashboard = [
  { path: "", component: <Dashboard_Home /> },
  { path: "profile", component: <Dashboard_Profile /> },
  { path: "settings", component: <Dashboard_Settings /> },
];

export { RoutesList, NestedRoutes_Dashboard };

import { RoutesList, NestedRoutes_Dashboard } from "../utils/RoutesList";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../screens/Home";

const RouterApp = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Home />}>
      {RoutesList.map((route, i) => {
        return <Route key={i} path={route.path} element={route.component} />;
      })}
      <Route path="dashboard">
        {/* STARTING NESTED ROUTES FOR DASHBOARD */}
        {NestedRoutes_Dashboard.map((route, i) => {
          return <Route key={i} path={route.path} element={route.component} />;
        })}
        {/* ENDING NESTED ROUTES FOR DASHBOARD */}
      </Route>
    </Route>
  )
);

export default RouterApp;

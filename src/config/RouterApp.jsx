import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Products } from "../components/Products.jsx";
import { ProductDetails } from "../components/ProductDetails.jsx";

const RouterApp = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="" element={<Products />} />

        {/* DYNAMIC ROUTES */}
        <Route path="products/:key" element={<ProductDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default RouterApp;

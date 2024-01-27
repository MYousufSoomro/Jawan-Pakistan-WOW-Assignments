import About from "../screens/About";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Error from "../screens/Error";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";

export const RouteList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },

  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

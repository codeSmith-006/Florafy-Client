import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Home from "./Component/Home.jsx";
import SignIn from "./Component/User/SignIn.jsx";
import SignUp from "./Component/User/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/sign-in',
        Component: SignIn
      },
      {
        path: '/sign-up',
        Component: SignUp
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

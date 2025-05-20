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
import Error from "./Component/Error.jsx";
import ExploreGarden from "./ExploreGarden.jsx";
import ShareTips from "./ShareTips.jsx";
import MyTips from "../MyTips.jsx";
import PrivateRoutes from "./Component/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/explore-gardeners",
        Component: ExploreGarden,
      },
      {
        path: "/share-tips",
        element: (
          <PrivateRoutes>
            <ShareTips></ShareTips>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-tips",
        element: (
          <PrivateRoutes>
            <MyTips></MyTips>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

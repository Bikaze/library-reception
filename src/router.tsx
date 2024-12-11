// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import UpdateInfo from "./pages/UpdateInfo";
import VerifyStudent from "./pages/VerifyStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "verify",
        element: <VerifyStudent />,
      },
      {
        path: "update",
        element: <UpdateInfo />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;

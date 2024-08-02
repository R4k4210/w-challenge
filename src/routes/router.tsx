import { Navigate, createBrowserRouter } from "react-router-dom";
import { HOME, CONNECT } from "@constants/routes";
import PrivateRoute from "@shared/private-route";
import Home from "@pages/home";
import Connect from "@pages/connect";

export const router = createBrowserRouter([
  {
    path: HOME,
    children: [
      { index: true, path: HOME, element: <PrivateRoute component={<Home />} /> },
      { element: <Navigate to={CONNECT} replace /> },
      { path: CONNECT, element: <Connect /> },
    ],
  },
]);

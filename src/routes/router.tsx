import { Navigate, createBrowserRouter } from "react-router-dom";
import { HOME, CONNECT } from "@constants";
import PrivateRoute from "@shared/private-route";
import Home from "@pages/home";
import Connect from "@pages/connect";
import Layout from "@shared/layout";

export const router = createBrowserRouter([
  {
    path: CONNECT,
    children: [
      { index: true, path: CONNECT, element: <Connect /> },
      { element: <Navigate to={CONNECT} replace /> },
    ],
  },
  {
    path: HOME,
    element: <PrivateRoute component={<Layout />} />,
    children: [{ index: true, path: HOME, element: <PrivateRoute component={<Home />} /> }],
  },
]);

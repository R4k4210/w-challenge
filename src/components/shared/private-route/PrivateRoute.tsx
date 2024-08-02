import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { CONNECT } from "@constants/routes";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component: Component }: IPrivateRoute): ReactNode => {
  //TODO: Get user wallet connected
  const authenticated = true;

  if (!authenticated) {
    return <Navigate to={CONNECT} replace />;
  }

  return Component;
};

export default PrivateRoute;

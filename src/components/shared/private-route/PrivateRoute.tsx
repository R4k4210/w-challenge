import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "@config/store";
import { useSelector } from "react-redux";
import { CONNECT } from "@constants/routes";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component: Component }: IPrivateRoute): ReactNode => {
  const authenticated = useSelector((state: RootState) => state.account.authenticated);

  if (!authenticated) {
    return <Navigate to={CONNECT} replace />;
  }

  return Component;
};

export default PrivateRoute;

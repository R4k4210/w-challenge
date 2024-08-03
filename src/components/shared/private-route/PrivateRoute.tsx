import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { RootState } from "@config/store";
import { useDispatch, useSelector } from "react-redux";
import { useAccountEffect } from "wagmi";
import { setAddress, setAuthenticated } from "@slices/accountSlice";
import { CONNECT } from "@constants/routes";

interface IPrivateRoute {
  component: ReactNode;
}

const PrivateRoute = ({ component: Component }: IPrivateRoute): ReactNode => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state: RootState) => state.account.authenticated);

  useAccountEffect({
    onDisconnect() {
      dispatch(setAuthenticated(false));
      dispatch(setAddress(null));
    },
  });

  if (!authenticated) {
    return <Navigate to={CONNECT} replace />;
  }

  return Component;
};

export default PrivateRoute;

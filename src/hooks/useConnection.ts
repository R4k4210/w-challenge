import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { setAccount, setAuthenticated } from "@slices/accountSlice";
import { HOME } from "@constants/routes";

const useConnection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      dispatch(setAccount(address));
      dispatch(setAuthenticated(true));
      navigate(HOME);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);
};

export default useConnection;

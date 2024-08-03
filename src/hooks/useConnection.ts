import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAccount, useChains } from "wagmi";
import { setAddress, setAuthenticated, setIsValidChain } from "@slices/accountSlice";
import { HOME } from "@constants/routes";

const useConnection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chains = useChains();

  const { address, chainId } = useAccount();

  const configuredChainIds = chains.map((chain) => chain.id);

  useEffect(() => {
    if (address) {
      dispatch(setAddress(address));
      dispatch(setAuthenticated(true));

      if (chainId && configuredChainIds.includes(chainId)) {
        dispatch(setIsValidChain(true));
      }

      navigate(HOME);
      return;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);
};

export default useConnection;

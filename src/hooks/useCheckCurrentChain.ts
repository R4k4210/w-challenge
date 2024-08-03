import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useChains } from "wagmi";
import { watchAccount } from "wagmi/actions";
import { setAddress, setIsValidChain } from "@slices/accountSlice";
import { setTargetAddress } from "@slices/targetSlice";
import { config } from "@config/wagmi";

const useCheckCurrentChain = () => {
  const dispatch = useDispatch();
  const chains = useChains();

  const configuredChainIds = chains.map((chain) => chain.id);

  useEffect(() => {
    const unwatch = watchAccount(config, {
      onChange(data) {
        const { chainId, address } = data;

        dispatch(setAddress(address as string));
        dispatch(setTargetAddress(null));

        if (chainId && configuredChainIds.includes(chainId)) {
          dispatch(setIsValidChain(true));
          return;
        }

        dispatch(setIsValidChain(false));
      },
    });

    return () => unwatch();
  }, [configuredChainIds, dispatch]);
};

export default useCheckCurrentChain;

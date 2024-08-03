import { Address } from "viem";
import { useReadContracts } from "wagmi";
import { useSelector } from "react-redux";
import { RootState } from "@config/store";
import { fromWeiToTokens } from "@helpers";
import { abi } from "@constants";

const useReadContractsData = (contract: string, units: number) => {
  const address = useSelector((state: RootState) => state.account.address);
  const target = useSelector((state: RootState) => state.target.address);

  const { data, isError, isLoading, refetch } = useReadContracts({
    contracts: [
      {
        address: contract as Address,
        abi: abi,
        functionName: "allowance",
        args: [target, address],
      },
      {
        address: contract as Address,
        abi: abi,
        functionName: "balanceOf",
        args: [address],
      },
    ],
  });

  const humanizedAllowance = fromWeiToTokens(data?.[0]?.result as bigint, units);
  const humanizedBalance = fromWeiToTokens(data?.[1]?.result as bigint, units);

  return {
    allowance: humanizedAllowance,
    balance: humanizedBalance,
    isLoading,
    refetch,
    isError,
  };
};

export default useReadContractsData;

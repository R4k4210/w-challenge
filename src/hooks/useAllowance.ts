import { Address, formatUnits } from "viem";
import { useReadContracts } from "wagmi";
import { useSelector } from "react-redux";
import { RootState } from "@config/store";
import { abi } from "@constants";

const useAllowance = (contract: string, units: number) => {
  const address = useSelector((state: RootState) => state.account.address);
  const target = useSelector((state: RootState) => state.target.address);

  const { data, isError, isLoading } = useReadContracts({
    contracts: [
      {
        address: contract as Address,
        abi: abi,
        functionName: "allowance",
        args: [address, target],
      },
    ],
  });

  const humizedData = data?.[0]?.result ? formatUnits(data[0].result as bigint, units) : 0;

  return {
    allowance: humizedData,
    isLoading,
    isError,
  };
};

export default useAllowance;

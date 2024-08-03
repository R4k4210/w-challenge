import { useEffect, useState } from "react";
import { RootState } from "@config/store";
import { useSelector } from "react-redux";
import { Address } from "viem";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { abi } from "@constants/abi";
import { toast } from "react-toastify";
import { parseEther } from "ethers/utils";
import useReadContractsData from "./useReadContractsData";

const useWriteOnContracts = (contract: string, units: number) => {
  const { data: hash, isPending, writeContract, error } = useWriteContract();
  const { allowance, balance, refetch } = useReadContractsData(contract, units);

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash });

  const address = useSelector((state: RootState) => state.account.address);
  const target = useSelector((state: RootState) => state.target.address);

  const [amount, setAmount] = useState("");

  const convertedBalance = balance ? parseEther(balance as string) : 0;
  const convertedAllowance = allowance ? parseEther(allowance as string) : 0;
  const convertedAmount = amount ? parseEther(amount) : 0;

  const basedContract = {
    abi: abi,
    address: contract as Address,
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Transaction successful");
      refetch();
      setAmount("");
    }
  }, [isSuccess, refetch]);

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  const approve = () => {
    if (!amount) {
      toast.error("Amount can't be empty");
      return;
    }

    if (Number(convertedBalance) < Number(convertedAmount)) {
      toast.error("Not enough balance");
      return;
    }

    writeContract({
      ...basedContract,
      functionName: "approve",
      args: [target, convertedAmount],
    });
  };

  const transfer = () => {
    if (!amount) {
      toast.error("Amount can't be empty");
      return;
    }

    if (Number(convertedAllowance) < Number(convertedAmount)) {
      toast.error("Not enough allowance");
      return;
    }

    // for USDC the same transferForm function does not work
    // reverted with 0xfb8f41b2, abi are differents or the amount format is wrong
    writeContract({
      ...basedContract,
      functionName: "transferFrom",
      args: [target, address, convertedAmount],
    });
  };

  return {
    amount,
    setAmount,
    approve,
    transfer,
    isPending,
    isLoading,
  };
};

export default useWriteOnContracts;

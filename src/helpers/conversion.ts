import { formatUnits } from "viem";

export const fromBNtoWei = (bnWei: bigint, units: number) => {
  if (!bnWei) {
    return 0;
  }
  return formatUnits(bnWei, units);
};

export const fromWeiToTokens = (wei: bigint, decimals: number) => {
  const numberWei = fromBNtoWei(wei, decimals);
  return numberWei;
};

import { isAddress } from "viem";

const useAddressValidation = () => {
  const validateAddress = (address: string) => {
    return isAddress(address);
  };

  return {
    validateAddress,
  };
};

export default useAddressValidation;

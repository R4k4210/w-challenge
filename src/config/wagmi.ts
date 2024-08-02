import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { sepolia } from "@wagmi/core/chains";
import { WALLTE_CONNECT_PROJECT_ID } from "@constants";

export const config = getDefaultConfig({
  appName: "W Challenge",
  projectId: WALLTE_CONNECT_PROJECT_ID,
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(),
  },
});

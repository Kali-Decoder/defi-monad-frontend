import { monadTestnet } from "viem/chains";
import { createPublicClient, http } from "viem";

const rpc =
          monadTestnet.rpcUrls.default.http[0]

export const publicClient = createPublicClient({
    chain: monadTestnet,
    transport: http(rpc),
});
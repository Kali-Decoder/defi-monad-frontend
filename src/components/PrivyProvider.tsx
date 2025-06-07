'use client';

import {PrivyProvider} from '@privy-io/react-auth';
import { monadTestnet } from "viem/chains";

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
    appId={process.env.NEXT_PUBLIC_APP_ID!}
    config={{
        appearance: {
            theme: "light",
            walletChainType: "ethereum-only",
        },
        defaultChain: monadTestnet,
        supportedChains: [monadTestnet],
        loginMethods: ["google", "passkey", "wallet"],
        embeddedWallets: {
            ethereum: { createOnLogin: "all-users" },
        },
    }}
    >
      {children}
    </PrivyProvider>
  );
}
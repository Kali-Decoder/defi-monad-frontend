import { publicClient } from "@/utils/publicClient";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useEffect, useRef } from "react";
import { createWalletClient, custom, WalletClient } from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { monadTestnet } from "viem/chains";
import ABI from './../lib/ABI.json'
import { CONTRACT_ADDRESS } from "../utils/constants";

export function useTransction() {
    const { user } = usePrivy();
    const { ready, wallets } = useWallets();

    const walletClient = useRef<WalletClient | null>(null);
    
    useEffect(() => {
        async function getWalletClient() {
            if (!ready || !wallets) return;

            const userWallet = wallets.find(
                (w) => w.walletClientType === "privy"
            );
            if (!userWallet) return;

            const ethereumProvider = await userWallet.getEthereumProvider();
            walletClient.current = createWalletClient({
                chain: monadTestnet,
                transport: custom(ethereumProvider),
                account: userWallet.address as `0x${string}`
            });
        }

        getWalletClient();
    }, [user, ready, wallets]);

    async function incrementCounter() {
        if (!walletClient.current) throw new Error("Wallet not connected");
        
        try {
            const { request } = await publicClient.simulateContract({
                abi: ABI,
                address: CONTRACT_ADDRESS,
                functionName: "increment",
                account: walletClient.current.account
            });
            
            const hash = await walletClient.current.writeContract(request);
            return await waitForTransactionReceipt(publicClient, { hash });
        } catch (error) {
            console.error("Error incrementing counter:", error);
            throw error;
        }
    }

    async function decrementCounter() {
        if (!walletClient.current) throw new Error("Wallet not connected");
        
        try {
            const { request } = await publicClient.simulateContract({
                abi: ABI,
                address: CONTRACT_ADDRESS,
                functionName: "decrement",
                account: walletClient.current.account
            });
            
            const hash = await walletClient.current.writeContract(request);
            return await waitForTransactionReceipt(publicClient, { hash });
        } catch (error) {
            console.error("Error decrementing counter:", error);
            throw error;
        }
    }

    async function fetchCounter() {
        try {
            const counter = await publicClient.readContract({
                abi: ABI,
                address: CONTRACT_ADDRESS,
                functionName: "counter",
            });
            return Number(counter);
        } catch (error) {
            console.error("Error fetching counter:", error);
            throw error;
        }
    }

    return {
        incrementCounter,
        decrementCounter,
        fetchCounter,
    };
}

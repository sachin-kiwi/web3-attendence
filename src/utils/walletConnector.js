import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { polygonMumbai, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import {
  metaMaskWallet,
  coinbaseWallet,
  rainbowWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, sepolia],
  [publicProvider()]
);

const appDetail = {
  appName: 'My RainbowKit App',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID,
  chains,
  UNSTABLE_shimOnConnectSelectAccount: true
};

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      coinbaseWallet(appDetail),
      rainbowWallet(appDetail),
      walletConnectWallet(appDetail),
      metaMaskWallet(appDetail)
    ]
  }
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
});

export { wagmiConfig, chains };

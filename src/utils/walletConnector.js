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
  projectId: '1394023ce25f2b728b4c0a01fc1ac132',
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

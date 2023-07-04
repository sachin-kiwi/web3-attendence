import 'bootstrap/dist/css/bootstrap.min.css';
import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiConfig } from '@/utils/walletConnector';

const WalletComponent = (props) => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          {props.children}
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
};

export default WalletComponent;

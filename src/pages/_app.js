import WalletComponent from '@/component/wallet/wallet';
import WalletAdapter from '@/component/walletAdapter';
import { HydrationProvider, Client } from 'react-hydration-provider';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <HydrationProvider>
        <Client>
          <WalletComponent>
            <WalletAdapter>
              <Component {...pageProps} />
            </WalletAdapter>
          </WalletComponent>
        </Client>
      </HydrationProvider>
    </>
  );
};

export default App;

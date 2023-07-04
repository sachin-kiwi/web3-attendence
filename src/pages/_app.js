import WalletComponent from '@/component/wallet';

export default function App({ Component, pageProps }) {
  return (
    <>
      <WalletComponent>
        <Component {...pageProps} />
      </WalletComponent>
    </>
  );
}

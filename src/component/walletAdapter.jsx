import CustomNavbar from './customNavbar';
import ConnectWallet from './wallet/connectWallet';
import { useAccount } from 'wagmi';

const WalletAdapter = (props) => {
  const { isConnected } = useAccount();
  return (
    <>
      <CustomNavbar></CustomNavbar>
      {isConnected ? props.children : <ConnectWallet />}
    </>
  );
};

export default WalletAdapter;

import CustomNavbar from '@/component/navbar';
import { showToast } from '@/utils/toast';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Head from 'next/head';
import { Container } from 'react-bootstrap';

export default function App() {
  return (
    <>
      <Head>
        <title>Web3 Demo App</title>
        <meta name="description" content="demo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <CustomNavbar />
      </Container>
    </>
  );
}

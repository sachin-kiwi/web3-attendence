import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const CustomNavbar = (props) => {
  const data = {
    accountStatus: props.accountStatus || 'avatar',
    chainStatus: props.chainStatus || 'full',
    showBalance: props.showBalance || false
  };

  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">
        <h1>School Dapp</h1>
      </Navbar.Brand>
      <Nav className="ms-auto">
        <ConnectButton {...data} />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;

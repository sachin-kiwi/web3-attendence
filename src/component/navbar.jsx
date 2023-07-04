import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Navbar, Nav } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <>
      <Navbar>
        <Nav className="container-fluid">
          <Nav.Item>
            <Navbar.Brand>web3 demo</Navbar.Brand>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <ConnectButton
              accountStatus="avatar"
              chainStatus={'full'}
              showBalance={false}
            />
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default CustomNavbar;

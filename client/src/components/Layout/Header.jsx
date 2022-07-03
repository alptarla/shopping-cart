import { Container, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      className="h-100 border-bottom shadow-sm"
      variant="light"
      bg="light"
    >
      <Container>
        <Navbar.Brand>Shopping Cart</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;

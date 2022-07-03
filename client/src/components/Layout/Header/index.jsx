import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar
      className="h-100 border-bottom shadow-sm"
      variant="light"
      bg="light"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
        >
          Shopping Cart
        </Navbar.Brand>
        <Nav.Link
          as={Link}
          to="/login"
        >
          <Button
            variant="outline-warning"
            className="fw-bold"
          >
            Login
          </Button>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
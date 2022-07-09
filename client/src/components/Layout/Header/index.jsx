import { useMemo } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';

function Header() {
  const user = useUser();

  const username = useMemo(() => {
    if (!user.data) return;
    return `${user.data.firstName} ${user.data.lastName}`;
  }, [user]);

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
          {username ? (
            <Nav.Item>{username}</Nav.Item>
          ) : (
            <Button
              variant="outline-warning"
              className="fw-bold"
            >
              Login
            </Button>
          )}
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;

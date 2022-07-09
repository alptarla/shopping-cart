import { useMemo } from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';

const CART_COUNT = 3;

function Header() {
  const user = useUser();

  const username = useMemo(() => {
    if (!user.data) return;
    return `${user.data.firstName} ${user.data.lastName}`;
  }, [user]);

  return (
    <Navbar
      className="h-100 border-bottom shadow-sm position-sticky top-0"
      style={{ zIndex: '1020' }}
      variant="light"
      bg="light"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
        >
          <i className="bi bi-shop fs-2 me-2" />
          <span>Shopping Cart</span>
        </Navbar.Brand>
        <Nav>
          {username ? (
            <>
              <Nav.Link
                as={Link}
                to="/profile"
                className="text-dark"
              >
                <i className="bi bi-person me-1" />
                <span>{username}</span>
              </Nav.Link>
              <Nav.Link
                as={Button}
                variant="link"
                className="position-relative"
              >
                <Badge
                  bg="warning"
                  className="position-absolute top-0 end-0 p-1"
                >
                  {CART_COUNT}
                </Badge>
                <i className="bi bi-cart" />
              </Nav.Link>
            </>
          ) : (
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
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

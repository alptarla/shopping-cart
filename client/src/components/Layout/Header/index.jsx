import { useState } from 'react';
import { useMemo } from 'react';
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
  Stack,
} from 'react-bootstrap';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import CartService from '../../../services/CartService';
import ShoppingCartCanvas from './ShoppingCartCanvas';

function Header() {
  const [isShowCartCanvas, setIsShowCartCanvas] = useState(false);

  const user = useUser();
  const { data: cart } = useQuery('cart', CartService.fetchCart);

  const username = useMemo(() => {
    if (!user.data) return;
    return `${user.data.firstName} ${user.data.lastName}`;
  }, [user]);

  const handleCartClick = () => {
    setIsShowCartCanvas(true);
  };

  const handleCloseCartCanvas = () => {
    setIsShowCartCanvas(false);
  };

  return (
    <>
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
                <Dropdown>
                  <Dropdown.Toggle
                    variant="text"
                    id="dropdown-user"
                  >
                    {username}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/profile"
                    >
                      <Stack
                        direction="horizontal"
                        gap={1}
                      >
                        <i className="bi bi-person" />
                        <span>Profile</span>
                      </Stack>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={user.logout}>
                      <Stack
                        direction="horizontal"
                        gap={1}
                      >
                        <i className="bi bi-box-arrow-right" />
                        <span>Logout</span>
                      </Stack>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link
                  as={Button}
                  variant="link"
                  className="position-relative"
                  onClick={handleCartClick}
                >
                  {!!cart?.products?.length && (
                    <Badge
                      bg="warning"
                      className="position-absolute top-0 end-0 p-1"
                    >
                      {cart.products.length}
                    </Badge>
                  )}
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

      <ShoppingCartCanvas
        isShow={isShowCartCanvas}
        onHide={handleCloseCartCanvas}
        products={cart?.products}
      />
    </>
  );
}

export default Header;

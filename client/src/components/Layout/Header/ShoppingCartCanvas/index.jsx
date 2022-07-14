import { Col, Offcanvas, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import CartService from '../../../../services/CartService';
import { useMutation, useQueryClient } from 'react-query';
import DividerTitle from '../../../common/DividerTitle';

function ShoppingCartCanvas({ isShow = false, onHide, products = [] }) {
  const queryClient = useQueryClient();
  const { mutateAsync: removeProductFromCart } = useMutation(
    'removeCartItem',
    CartService.removeProductFromCart
  );

  const handleRemoveCartItem = async ({ product }) => {
    await removeProductFromCart(product._id);
    queryClient.invalidateQueries('cart');
  };

  return (
    <Offcanvas
      show={isShow}
      onHide={onHide}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <DividerTitle
            title="Cart"
            className="fs-3"
          />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Row className="g-3">
          {products.map((item, index) => (
            <Col
              lg={12}
              key={index}
            >
              <CartItem
                item={item}
                onRemoveItem={handleRemoveCartItem}
              />
            </Col>
          ))}
        </Row>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

ShoppingCartCanvas.propTypes = {
  isShow: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default ShoppingCartCanvas;

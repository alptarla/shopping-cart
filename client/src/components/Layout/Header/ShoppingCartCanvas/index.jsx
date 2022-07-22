import { Col, Offcanvas, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import CartService from '../../../../services/CartService';
import { useMutation, useQueryClient } from 'react-query';
import DividerTitle from '../../../common/DividerTitle';
import CartTotal from './CartTotal';
import { useMemo } from 'react';
import { usdFormatter } from '../../../../utils/currency';
import AlertMessage from '../../../common/AlertMessage';

const TAX = 12;

function ShoppingCartCanvas({ isShow = false, onHide, products = [] }) {
  const queryClient = useQueryClient();
  const { mutateAsync: removeProductFromCart } = useMutation(
    'removeCartItem',
    CartService.removeProductFromCart
  );

  const { mutateAsync: clearCart, isLoading: isCartClearLoading } = useMutation(
    'clearCart',
    CartService.clearCart
  );

  const handleRemoveCartItem = async ({ product }) => {
    await removeProductFromCart(product._id);
    queryClient.invalidateQueries('cart');
  };

  const handleCheckout = async () => {
    await clearCart();
    queryClient.invalidateQueries('cart');
    onHide();
  };

  const { price, tax, total } = useMemo(() => {
    const productPricesArr = products.map((item) => {
      return item.product.price * item.quantity;
    });
    const price = productPricesArr.reduce((acc, curr) => acc + curr, 0);

    return {
      price: usdFormatter(price),
      tax: usdFormatter(TAX),
      total: usdFormatter(price + TAX),
    };
  }, [products]);

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
        {products.length ? (
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
        ) : (
          <AlertMessage message="There are no items in your cart" />
        )}
      </Offcanvas.Body>

      {!!products.length && (
        <CartTotal
          price={price}
          total={total}
          tax={tax}
          onCheckout={handleCheckout}
          isLoading={isCartClearLoading}
        />
      )}
    </Offcanvas>
  );
}

ShoppingCartCanvas.propTypes = {
  isShow: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  products: PropTypes.array,
};

export default ShoppingCartCanvas;

import { Button, ListGroup, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

function CartTotal({ price, tax, total, onCheckout }) {
  const items = useMemo(() => {
    return [
      { label: 'Price', value: price },
      { label: 'Tax', value: tax },
      { label: 'Total', value: total },
    ];
  }, [price, tax, total]);

  return (
    <ListGroup className="position-sticky bottom-0 end-0 w-100">
      {items.map((item, index) => (
        <ListGroup.Item
          variant="warning"
          key={index}
        >
          <Stack
            direction="horizontal"
            style={{ width: '8rem' }}
          >
            <span className="me-2 fw-bold">{item.label}</span>
            <span className="ms-auto">{`: ${item.value}`}</span>
          </Stack>
        </ListGroup.Item>
      ))}
      <ListGroup.Item variant="warning">
        <Button
          variant="warning"
          className="w-100"
          onClick={onCheckout}
        >
          Checkout
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

CartTotal.propTypes = {
  price: PropTypes.string.isRequired,
  tax: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

export default CartTotal;

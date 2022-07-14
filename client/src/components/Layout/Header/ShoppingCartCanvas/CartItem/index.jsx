import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Card, Stack } from 'react-bootstrap';
import { usdFormatter } from '../../../../../utils/currency';

function CartItem({ item, onRemoveItem }) {
  const { product, quantity } = item;

  const price = useMemo(() => {
    return usdFormatter(product.price);
  }, [product.price]);

  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <Card>
      <Card.Header
        as="h6"
        className="position-relative"
      >
        <p className="pe-3 text-truncate">{product.title}</p>
        <i
          className="bi bi-dash text-danger position-absolute top-0 end-0 fs-3"
          style={{ cursor: 'pointer' }}
          onClick={handleRemoveItem}
        />
      </Card.Header>
      <Card.Body>
        <Stack
          direction="horizontal"
          className="justify-content-between mb-2"
        >
          <Card.Img
            src={product.image}
            style={{ width: 50, height: 50 }}
          />
          <Card.Text>
            <span>{price}</span>
            <span className="mx-2">x</span>
            <span>{quantity}</span>
          </Card.Text>
        </Stack>
      </Card.Body>
    </Card>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default CartItem;

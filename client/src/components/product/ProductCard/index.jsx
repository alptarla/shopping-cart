import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import { usdFormatter } from '../../../utils/currency';

function ProductCard({ product, onAddToCart }) {
  const price = useMemo(() => {
    return usdFormatter(product.price);
  }, [product.price]);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Card
      style={{ maxWidth: '18rem' }}
      className="w-100 border-warning"
    >
      <Badge
        className="position-absolute top-0 end-0 fw-bold"
        bg="warning"
      >
        {product.category}
      </Badge>
      <Card.Img
        className="p-5"
        variant="top"
        src={product.image}
        style={{ aspectRatio: '1 / 1', objectFit: 'contain' }}
      />
      <Card.Body>
        <Card.Title
          className="text-truncate"
          title={product.title}
        >
          {product.title}
        </Card.Title>
        <Card.Text className="text-muted">{price}</Card.Text>
        <Button
          variant="secondary"
          className="w-100 fw-bold"
          onClick={handleAddToCart}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;

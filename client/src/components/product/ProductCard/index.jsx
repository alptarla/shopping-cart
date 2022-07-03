import PropTypes from 'prop-types';
import { Badge, Button, Card } from 'react-bootstrap';

function ProductCard({ product }) {
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
        <Card.Text className="text-muted">{product.price}</Card.Text>
        <Button
          variant="secondary"
          className="w-100 fw-bold"
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;

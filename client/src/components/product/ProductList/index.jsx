import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';

function ProductList({ products = [] }) {
  return (
    <Row className="g-5 justify-content-center">
      {products.map((product) => (
        <Col
          lg={3}
          md={4}
          sm={6}
          key={product._id}
        >
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;

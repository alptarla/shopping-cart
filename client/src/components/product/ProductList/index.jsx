import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useMutation, useQueryClient } from 'react-query';
import CartService from '../../../services/CartService';

function ProductList({ products = [] }) {
  const queryClient = useQueryClient();
  const { mutateAsync: addProductToCart } = useMutation(
    CartService.addProductToCart
  );

  const handleAddToCart = async (product) => {
    await addProductToCart(product._id);
    queryClient.invalidateQueries('cart');
  };

  return (
    <Row className="g-5 justify-content-center">
      {products.map((product) => (
        <Col
          lg={3}
          md={4}
          sm={6}
          key={product._id}
        >
          <ProductCard
            product={product}
            onAddToCart={handleAddToCart}
          />
        </Col>
      ))}
    </Row>
  );
}

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;

import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard';
import { useMutation, useQueryClient } from 'react-query';
import CartService from '../../../services/CartService';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_STORAGE_KEY } from '../../../constants';

function ProductList({ products = [] }) {
  const queryClient = useQueryClient();

  // ** optimistic update
  const handleCartMutate = useCallback(async (newProductId) => {
    await queryClient.cancelQueries('cart');
    const previousCart = queryClient.getQueryData('cart');

    const hasProductInCart = previousCart.products.some((item) => {
      return item.product._id === newProductId;
    });

    queryClient.setQueryData('cart', (old) => {
      if (hasProductInCart) {
        old.products = old.products.map((item) => {
          if (item.product._id === newProductId) item.quantity++;
          return item;
        });
      } else {
        const existingProduct = products.find((product) => {
          return product._id === newProductId;
        });

        old.products = [
          ...old.products,
          { quantity: 1, product: existingProduct },
        ];
      }

      return old;
    });

    return { previousCart };
  }, []);

  const handleCartMutateError = useCallback((err, newCart, context) => {
    queryClient.setQueryData('cart', context.previousCart);
  }, []);

  const handleCartMutateSettled = useCallback(() => {
    queryClient.invalidateQueries('cart');
  }, []);

  const { mutateAsync: addProductToCart } = useMutation(
    CartService.addProductToCart,
    {
      onMutate: handleCartMutate,
      onError: handleCartMutateError,
      onSettled: handleCartMutateSettled,
    }
  );

  const navigate = useNavigate();

  const handleAddToCart = async (product) => {
    if (!localStorage.getItem(TOKEN_STORAGE_KEY)) {
      navigate('/login');
      return;
    }

    await addProductToCart(product._id);
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

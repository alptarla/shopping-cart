import { useQuery } from 'react-query';
import { AlertMessage, PageLoader } from '../../components/common';
import { ProductList } from '../../components/product';
import ProductService from '../../services/ProductService';

function Home() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery('products', ProductService.getProducts);

  if (isLoading) return <PageLoader />;

  if (isError)
    return (
      <AlertMessage
        message={error.message || 'Something went wrong'}
        variant="danger"
      />
    );

  return <ProductList products={products} />;
}

export default Home;

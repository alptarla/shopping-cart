import { useQuery } from 'react-query';
import ProductService from '../../services/ProductService';

function Home() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery('products', ProductService.getProducts);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>Error occurred</div>;
  return <div>{JSON.stringify(products)}</div>;
}

export default Home;

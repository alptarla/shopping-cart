import apiClient from '../utils/apiClient';

async function getProducts() {
  const { data } = await apiClient.get('/product');
  return data.products;
}

async function getProductById(id) {
  const { data } = await apiClient.get(`/product/${id}`);
  return data.product;
}

export default {
  getProducts,
  getProductById,
};

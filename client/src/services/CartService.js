import apiClient from '../utils/apiClient';

async function addProductToCart(productId) {
  return apiClient.post(`/cart/${productId}`);
}

async function fetchCart() {
  const { data } = await apiClient.get('/cart');
  return data.cart;
}

export default { addProductToCart, fetchCart };

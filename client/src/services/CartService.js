import apiClient from '../utils/apiClient';

async function addProductToCart(productId) {
  return apiClient.post(`/cart/${productId}`);
}

async function fetchCart() {
  const { data } = await apiClient.get('/cart');
  return data.cart;
}

async function removeProductFromCart(productId) {
  return apiClient.delete(`/cart/${productId}`);
}

async function clearCart() {
  return apiClient.delete('/cart');
}

export default {
  addProductToCart,
  fetchCart,
  removeProductFromCart,
  clearCart,
};

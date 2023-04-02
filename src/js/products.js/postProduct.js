import axios from 'axios';
const BASE_URL = 'https://dummyjson.com';

const getProductById = async () => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};

const postProduct = async (data) => {
  const response = await axios.post(`${BASE_URL}/products/add`, data);
  return response.data;
};
export default { postProduct, getProductById };

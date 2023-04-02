import axios from 'axios';

export const handleProductFormSubmit = (productElement) => async (e) => {
  e.preventDefault();
  const productId = e.currentTarget.elements.id.value;

  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    const data = response.data;
    productElement.innerHTML = `<h3>${data.title}</h3><p>PRICE: ${data.price}</p>`;
  } catch (error) {
    console.log(error);
  }
};

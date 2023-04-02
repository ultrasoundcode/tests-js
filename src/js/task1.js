import axios from 'axios';

const createMurkUp = (data) => {
  console.log(data);
  const murkUp = data.products
    .map(({ title, price, description }) => {
      return `<li><h3>${title}</h3><p>${price}</p><p>${description}</p></li>`;
    })
    .join('');
  return murkUp;
};

export const getProducts = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  const murkUp = createMurkUp(response.data);
  return murkUp;
};

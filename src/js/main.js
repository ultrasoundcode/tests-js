import './styles/style.css';
import axios from 'axios';
const allProductsList = document.querySelector('#allProducts');

const createMurkUp = (data) => {
  console.log(data);
  const murkUp = data.products
    .map(({ title, price, description }) => {
      return `<li>
				          <h3>${title}</h3>
				          <p>${price}</p>
				          <p>${description}</p>
			         </li>`;
    })
    .join('');
  return murkUp;
};
const getProducts = axios
  .get('https://dummyjson.com/products')
  .then((response) => response.data)
  .then(createMurkUp)
  .then((murkUp) => {
    allProductsList.insertAdjacentHTML('beforeend', murkUp);
  });

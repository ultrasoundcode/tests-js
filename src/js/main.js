import './styles/style.css';
import axios from 'axios';

// ========task1
const allProductsList = document.querySelector('#allProducts');

// const createMurkUp = (data) => {
//   console.log(data);
//   const murkUp = data.products
//     .map(({ title, price, description }) => {
//       return `<li>
// 				          <h3>${title}</h3>
// 				          <p>${price}</p>
// 				          <p>${description}</p>
// 			         </li>`;
//     })
//     .join('');
//   return murkUp;
// };
// const getProducts = axios
//   .get('https://dummyjson.com/products')
//   .then((response) => response.data)
//   .then(createMurkUp)
//   .then((murkUp) => {
//     allProductsList.insertAdjacentHTML('beforeend', murkUp);
// 	});
// ========task2

const form = document.querySelector('#singleProductForm');
const productElement = document.querySelector('#singleProduct');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const productId = e.currentTarget.elements.id.value;
  axios
    .get(`https://dummyjson.com/products/${productId}`)
    .then(function (response) {
      return response.data;
    })
    .then(function (data) {
      productElement.innerHTML = `<h3>${data.title}</h3><p>PRICE: ${data.price}</p>`;
    })
    .catch(function (error) {
      console.log(error);
    });
});
console.log(productElement);

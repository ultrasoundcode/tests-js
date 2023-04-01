import './styles/style.css';
import axios from 'axios';
import { getProducts } from './task1';
import { handleProductFormSubmit } from './task2';

const allProductsList = document.querySelector('#allProducts');
const form = document.querySelector('#singleProductForm');
const productElement = document.querySelector('#singleProduct');

getProducts().then((murkUp) => {
  allProductsList.insertAdjacentHTML('beforeend', murkUp);
});

form.addEventListener('submit', handleProductFormSubmit(productElement));

// ======== task3 ========
// refs.form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // console.log(e);
//   const data = {};
//   const formData = new FormData(e.currentTarget).forEach((value, name) => {
//     data[name] = value;
//   });
//   console.log(data);
// });
// --- не закончен ---

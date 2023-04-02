import './styles/style.css';
import { getProducts } from './task1';
import { handleProductFormSubmit } from './task2';

const allProductsList = document.querySelector('#allProducts');
const form = document.querySelector('#singleProductForm');
const productElement = document.querySelector('#singleProduct');

getProducts().then((murkUp) => {
  allProductsList.insertAdjacentHTML('beforeend', murkUp);
});

form.addEventListener('submit', handleProductFormSubmit(productElement));

import './styles/style.css';
import { getProducts } from './tasks.js/task1';
import { handleProductFormSubmit } from './tasks.js/task2';
import { refs } from './refs.js/refs';
import postProductsApi from './products.js/postProduct';
import { productMarkup } from './products.js/markUps.js.js';
// task1==
// const allProductsList = document.querySelector('#allProducts');
// const form = document.querySelector('#singleProductForm');
// const productElement = document.querySelector('#singleProduct');

// getProducts().then((murkUp) => {
//   allProductsList.insertAdjacentHTML('beforeend', murkUp);
// });
//  task2==
// form.addEventListener('submit', handleProductFormSubmit(productElement));
//  task3==
refs.form.addEventListener('submit', productFormSubmit);

async function productFormSubmit(e) {
  e.preventDefault();
  // console.log(e);
  const data = {};
  const formData = new FormData(e.currentTarget).forEach((value, name) => {
    data[name] = value;
  });
  const response = await postProductsApi.postProduct(data);
  refs.productSection.innerHTML = productMarkup(response);
  refs.form.reset();
}

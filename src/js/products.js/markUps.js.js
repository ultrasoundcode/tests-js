export function productMarkup(response) {
  return `<h3>${response.title}</h3><p>${response.price}</p><p>${response.description}</p>`;
}

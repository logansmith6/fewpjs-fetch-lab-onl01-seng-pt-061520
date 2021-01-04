<<<<<<< HEAD

function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
=======

function fetchBooks() {
fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  })
  .then(json => console.log(json));
  return resp;
}

function renderBooks(books) {

>>>>>>> 07cf242f3132c6cceccf012ac639ee43d15e8913
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
<<<<<<< HEAD
=======
  renderBooks(fetchBooks())
>>>>>>> 07cf242f3132c6cceccf012ac639ee43d15e8913

})

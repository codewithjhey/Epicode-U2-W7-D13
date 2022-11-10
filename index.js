const getBooks = async () => {
  let response = await fetch("https://striveschool-api.herokuapp.com/books")
  let books = await response.json()
  console.log(books)

  let container = document.querySelector(".firstRow")
  books.forEach((book) => {
    container.innerHTML += `<div class="col-md-4 ">
  <div class="card mb-4 shadow-sm">
    <img src=${book.img} class="card-img-top" alt="...">
    
    <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
      <p class="card-text">Category: ${book.category}</p>
      <p class="card-text">Price: $ ${book.price}</p>
      <div class="card-buttons">
      <button class="btn btn-primary add-button">Add To Cart</button>
      <button class="btn btn-danger skip-button">Skip</button>
    </div>
      </div>
    </div>
  </div>
</div>`
  })
}

window.onload = getBooks

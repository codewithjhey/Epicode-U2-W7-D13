const allBooksTitlesArray = []

// creating bookCards dynamically
const createBookCard = function (book) {
  let container = document.querySelector(".firstRow")
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

  const addToCartBtn = document.querySelectorAll(".add-button")
  addToCartBtn.forEach((addBtn) => {
    addBtn.addEventListener("click", () => {
      const currentCard = addBtn.closest(".card-body") //get the closest card-body
      const currentTitle = currentCard.querySelector("h5").innerText //get the innerText of the h5 from the card-body
      const modalBody = document.querySelector(".modal-body") //get the modal that we want to change
      const ul = document.createElement("ul") //create ul and li
      const newLi = document.createElement("li")
      newLi.innerText = currentTitle //pass the li the currentTitle
      ul.appendChild(newLi) //append to ul
      modalBody.appendChild(ul) //append to modalBody
      addToCartBtn.disabled = "true" //change the add button to disabled
    })
  })

  const skipButtons = document.querySelectorAll(".skip-button")
  for (let skipButton of skipButtons) {
    skipButton.addEventListener("click", () => {
      skipButton.parentNode.parentNode.parentNode.remove()
    })
  }
}

const getAndCreateBooks = async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/books")
  const books = await response.json()
  books.forEach(createBookCard)
}

function onDisplay() {
  const displayBooksBtn = document.querySelector(".display-books")
  displayBooksBtn.addEventListener("click", getAndCreateBooks)
  getAndCreateBooks()
}

function onSearchBook() {
  const searchAndDisplay = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/books")
    const list = await response.json()
    const filteredList = list.filter((list) =>
      list.title.includes(searchedValue)
    )
    filteredList.forEach(createBookCard)
    searchAndDisplay()
  }
}

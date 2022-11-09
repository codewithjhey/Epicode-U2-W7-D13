const getBooks = async () => {
  let unreadableResult = await fetch(
    "https://striveschool-api.herokuapp.com/books"
  )
  let result = await unreadableResult.json()
  let data = result.data
  console.log(data)

  let container = document.querySelector(".firstRow")
  result.forEach((data) => {
    let { book } = data
    container.innerHTML += `<div class="col-md-4">
  <div class="card mb-4 shadow-sm">
    <img src=${book.img} class="card-img-top" alt="...">
    
    <div class="card-body">
      <p class="card-text">${book.title}
      </p>
      <div
        class="d-flex justify-content-between align-items-center"
      >/attachments/1024673103206432769/1039931950426755072/Screenshot_2022-11-09_at_3.58.03_PM.png
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary hideBtn"
          >
            Hide
          </button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</div>`
  })
}

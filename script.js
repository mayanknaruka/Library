const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}


function displayBooks() {
    const bookContainer = document.getElementById("book-container")

    bookContainer.innerHTML = ""

    myLibrary.forEach((book) => {

    const card = document.createElement("div")

     const title = document.createElement("h3")
     title.textContent = book.title

     const author = document.createElement("p")
     author.textContent = `Author: ${book.author}`

    const pages = document.createElement("p")
     pages.textContent = `Pages: ${book.pages}`

      const read = document.createElement("p");
        read.textContent = `Read: ${book.read}` 

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)

     bookContainer.appendChild(card)
    })
}


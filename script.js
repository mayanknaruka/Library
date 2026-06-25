const myLibrary = [];

function Book(title, author, pages, read) {
    // the constructor...
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
};
function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}


function displayBooks() {
    const bookContainer = document.getElementById("book-container");

    bookContainer.innerHTML = "";

    myLibrary.forEach((book) => {

        const card = document.createElement("div");

        card.dataset.id = book.id;

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `Pages: ${book.pages}`;

        const read = document.createElement("p");
        read.textContent = `Read: ${book.read}`;

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";

        toggleBtn.addEventListener("click", () => {
            book.toggleRead();
            displayBooks();
        });

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";

        removeBtn.addEventListener("click", () => {

            const bookIndex = myLibrary.findIndex(
                (libraryBook) => libraryBook.id === book.id
            );

            myLibrary.splice(bookIndex, 1);

            displayBooks();
        });

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(read);
        card.appendChild(toggleBtn);
        card.appendChild(removeBtn);

        bookContainer.appendChild(card);
    });
}

const newBookBtn = document.getElementById("new-book-btn");
const bookDialog = document.getElementById("book-dialog");

newBookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(
        title,
        author,
        pages,
        read
    );

    displayBooks();

    bookForm.reset();

    bookDialog.close();
});

displayBooks();
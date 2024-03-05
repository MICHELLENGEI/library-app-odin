showModal();
clearForm();
function showModal(params) {
    const newBookButton = document.querySelector('.newBook');
    let modal = document.querySelector('.modal');
    const closeModalButton = document.querySelector('.close');

    newBookButton.addEventListener('click', function () {
        modal.style.display = "block";
    });
    closeModalButton.addEventListener('click', function () {
        modal.style.display = "none";
    });

}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const myLibrary = [];


const existingBookData = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281, read: true },
    { title: "1984", author: "George Orwell", pages: 328, read: false },
    { title: "Pride and Prejudice", author: "Jane Austen", pages: 279, read: true }
];

existingBookData.forEach(function(bookData) {
    const book = new Book(bookData.title, bookData.author, bookData.pages, bookData.read);
    myLibrary.push(book);
});



function addBookFromForm() {

    const titleFromForm = document.getElementById('title').value;
    const authorFromForm = document.getElementById('author').value;
    const pagesFromForm = document.getElementById('pages').value;
    const readFromForm = document.querySelector('input[name="read"]:checked').value;

    // Create a new book object using a mix of existing and form data
    const newBook = new Book(
        titleFromForm,
        authorFromForm,
        pagesFromForm,
        readFromForm
    );

 
    myLibrary.push(newBook);

    console.log("New book added:", newBook);

   
    displayBooks();
}


function displayBooks() {
    const bookContainer = document.querySelector('.bookContainer');
    bookContainer.innerHTML = ''; 
    // Generate cards for each book
    myLibrary.forEach(function(book,index) {
        const card = document.createElement('div');
        card.classList.add('card', 'custom-card');
        card.innerHTML = `
            <h2>New Book</h2>
            <h3>Title: ${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <input type="radio" name="status-${book.title}" value="read" ${book.read ? 'checked' : ''}> Read
            <input type="radio" name="status-${book.title}" value="unread" ${!book.read ? 'checked' : ''}> Unread
            <button class="deleteButton">Delete</button>
        `;

        bookContainer.appendChild(card);

        const deleteButton = card.querySelector('.deleteButton');
        deleteButton.addEventListener('click', function() {
            bookContainer.removeChild(card);
            // Remove book from  myLibrary array
            myLibrary.splice(index, 1);
        });
    });

}
function clearForm() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
   
}
document.addEventListener('DOMContentLoaded', function() {
    let modal = document.querySelector('.modal');
    
    modal.addEventListener('submit', function(event) {

        event.preventDefault();
        addBookFromForm();
        modal.style.display = "none";
    });

    displayBooks();
});



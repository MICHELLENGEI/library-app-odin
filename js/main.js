const myLibrary = new Array();



function showModal(params) {
    const newBookButton = document.querySelector('.newBook');
    const modal = document.querySelector('.modal');
    const closeModalButton = document.querySelector('.close');

    newBookButton.addEventListener('click', function () {
        modal.style.display = "block";
    });
    closeModalButton.addEventListener('click', function () {
        modal.style.display = "none";
    });
}
showModal();

modal.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;


    function Book(title, author, pages, status) {
        title = title;
        author = author;
        pages = pages;
        status = status;

    }
    myLibrary.push(book);
    console.log(myLibrary);

    displayBooks();

    // Reset form fields
    bookForm.reset();

    // Close the modal
    modal.style.display = "none";
});

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i])
}
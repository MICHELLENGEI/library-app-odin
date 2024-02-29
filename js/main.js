const myLibrary = new Array();

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

}

function showModal(params) {
    const newBookButton = document.querySelector('.newBook');
    const modal = document.querySelector('.modal');
    const closeModalButton = document.querySelector('.close');

    newBookButton.addEventListener('click', function() {
        modal.style.display = "block";
    });
    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });
}
showModal();
const book = new Book('Keeping up', 'Ngei', 294, 'read')
myLibrary.push(book);
console.log(myLibrary);

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i])
}
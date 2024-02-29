const  myLibrary = new Array();

function Book(title , author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    
}
const book = new Book('Keeping up','Ngei',294, 'read')
myLibrary.push(book);
console.log(myLibrary); 

for(let i=0; i < myLibrary.length; i++){
    console.log(myLibrary[i])
}
const addBook = document.getElementById('add-book');
const addBookContainer = document.getElementById('add-book-container');
const mainContainer = document.getElementById('main-container');

function openNav() {
    document.getElementById("mySidebar").style.width = "20vw";
    document.getElementById("main").style.marginLeft = "20vw";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function removeBook() {

}

const formAddBook = document.getElementById('form-add-book');

function validateForm() {
    const title = document.getElementById('book-title');
    const author = document.getElementById('author');
    const pagesNumber= document.getElementById('pages-number');
    const publishedDate= document.getElementById('published-date');
    const readBookOrNot = document.getElementById('');

}

function closeAddBook() {
    addBookContainer.style.display = "none";
}



// Get the modal
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close-form")[0];

// When the user clicks the add button, open form 
addBook.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
    mainContainer.style.filter = "blur(2px)"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        mainContainer.style.filter = "none";
    }
}

const book1 = newBook(title, author, published, pages, readOrNot);

function Book(title, author, published, pages, readOrNot) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.pages = pages;
    this.readOrNot = readOrNot;
   }
// books come from user from form


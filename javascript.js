const addBook = document.getElementById('add-book');
const addBookContainer = document.getElementById('add-book-container');
const mainContainer = document.getElementById('main');
const formAddBook = document.getElementById('form-add-book');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close-form")[0];
const submitButton = document.getElementsByClassName('submit');
let haveRead = document.getElementsByClassName('read');
const libraryContainer = document.getElementsByClassName('book-container');



let bookCounter = 0;
let pageCounter = 0;

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





function validateForm(event) {
    let titleBook = document.getElementById('book-title').value;
    let authorBook = document.getElementById('author').value;
    let pagesNumber= document.getElementById('pages-number').value;
    let publishedDate= document.getElementById('published-date').value;
    let readBookOrNot = document.getElementById('read-part-form').value;

    let book = new Book(titleBook, authorBook, pagesNumber, publishedDate, readBookOrNot);

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titlePhrase = document.createElement('p');
    titlePhrase.classList.add('book-title')
    titlePhrase.textContent = `Title: ${book.title}`

    const authorPhrase = document.createElement('p');
    authorPhrase.classList.add('author');
    authorPhrase.textContent = `Author: ${book.author}`;

    const pagesPhrase = document.createElement('p');
    pagesPhrase.classList.add('pages');
    pagesPhrase.textContent = `# of Pages: ${book.pages}`;

    const publishedPhrase = document.createElement('p');
    publishedPhrase.classList.add('published');
    publishedPhrase.textContent = `Published: ${book.published}`;

    const buttonBoxDiv = document.createElement('div');
    buttonBoxDiv.classList.add('button-box');

    const readOrNotDiv = document.createElement('div');
    readOrNotDiv.classList.add('read-or-not');


    const readButton = document.createElement('button');
    readButton.classList.add('read');
    readButton.textContent = 'Finished &#x2713';
    readOrNotDiv.appendChild(readButton);
    buttonBoxDiv.appendChild(readBookOrNot);
    

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-book');
    deleteButton.href = 'javascript:void(0)';
    deleteButton.onclick = removeBook;
    deleteButton.textContent = '×';
    buttonBoxDiv.appendChild(deleteButton);


    buttonBoxDiv.appendChild(readOrNotDiv);
    buttonBoxDiv.appendChild(deleteButton);

    bookDiv.appendChild(titlePhrase);
    bookDiv.appendChild(authorPhrase);
    bookDiv.appendChild(pagesPhrase);
    bookDiv.appendChild(publishedPhrase);
    bookDiv.appendChild(buttonBoxDiv);

}


function Book(titleBook, authorBook, pagesNumber, publishedDate, readBookOrNot) {
    this.titleBook = title;
    this.authorBook = author;
    this.pagesNumber = pages;
    this.publishedDate = published;
    this.readBookOrNot = readOrNot;

}





function closeAddBook() {
    addBookContainer.style.display = "none";
}



// Get the modal

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

// const book1 = new Book(title, author, published, pages, readOrNot);



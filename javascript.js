const addBook = document.getElementById('add-book');
const addBookContainer = document.getElementById('add-book-container');
const mainContainer = document.getElementById('main');
const formAddBook = document.getElementById('form-add-book');
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close-form")[0];
const submitButton = document.getElementsByClassName('submit');
const readButtons = document.querySelectorAll('.read');
const libraryContainer = document.querySelector('.book-container');
const bookQuantityDisplay = document.getElementById('counter-quantity');
const booksFinishedDisplay = document.getElementById('counter-finished');
const pageCounterDisplay = document.getElementById('counter-pages');
const booksPercentageCounter = document.getElementById('counter-completed');
const books = document.querySelectorAll('.book');
let library = [];

let booksFinishedCounter = 14;
let bookCounter = 17;
let pageCounter = 0;


function hardCodedBooks () {
    library.push(new Book('+'));
    library.push(new Book("The Undead King", "Kugane Maruyama", 160, "May 24, 2016", true));
    library.push(new Book("The Dark Warrior", "Kugane Maruyama", 158, "Sept 27, 2016", true));
    library.push(new Book("The Lizard Man Heroes", "Kugane Maruyama", 309, "May 23, 2017", true));
    library.push(new Book("The Men of the Kingdom Pt. 1", "Kugane Maruyama", 165, "Sept 19, 2017", true));
    library.push(new Book("The Men of the Kingdom Pt. 2", "Kugane Maruyama", 195, "Jan 1, 2018", true));
    library.push(new Book("The Invaders of the Great Tomb", "Kugane Maruyama", 332, "May 22, 2018", true));
    library.push(new Book("The Two Leaders", "Kugane Maruyama", 239, "Sept 18, 2018", true));
    library.push(new Book("The Caster of Destruction", "Kugane Maruyama", 269, "Jan 22, 2019", true));
    library.push(new Book("The Ruler of Conspiracy", "Kugane Maruyama", 203, "May 21, 2019", true));
    library.push(new Book("The Dwarven Crafter", "Kugane Maruyama", 295, "Oct 29, 2019", true));
    library.push(new Book("The Paladin of the Sacred Kingdom Pt. 1", "Kugane Maruyama", 250, "June 23, 2020", true));
    library.push(new Book("The Paladin of the Sacred Kingdom Pt. 2", "Kugane Maruyama", 341, "June 1, 2021", true));
    library.push(new Book("The Bloody Valkyrie", "Kugane Maruyama", 175, "Jan 24, 2017", true));
    library.push(new Book("The Witch of the Fallen Kingdom", "Kugane Maruyama", 485, "June 28, 2022", true));
    library.push(new Book("A Game of Thrones", "George R.R. Martin", 694, "July 1, 1996", false));
    library.push(new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, "July 29, 1954", false));
    library.push(new Book("The Hobbit", "J.R.R. Tolkien", 304, "1937", false));
}

// When the user clicks the add button, open form 
// Switches form from 'none' to 'block'
function showForm() {
    modal.style.display = "block";
    mainContainer.style.filter = "blur(2px)"
}

function openNav() {
    document.getElementById("mySidebar").style.width = "20vw";
    document.getElementById("main").style.paddingLeft = "20vw";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.paddingLeft= "0";
}

function pageLoopCounter() {
    let pageCounter = 0;
    for (let z = 1; z < library.length; z++) {
        // console.log(library.length + ' library length');
        const book = library[z];
        if (book.hasOwnProperty('pages')) {
            pageCounter += parseInt(book.pages);
        } else {return}
    }
    pageCounterDisplay.innerHTML = pageCounter;
}

function bookFinishedLoop() {
    booksFinishedCounter = 0;
    for (let x = 0; x < library.length; x++) {
        const book = library[x];
        if (book.readOrNot === true) {
            booksFinishedCounter++;
        }
    }
    booksFinishedDisplay.innerHTML = booksFinishedCounter;
    booksPercentageCounter.innerHTML = Math.round((parseInt(booksFinishedCounter) / bookCounter) * 100) + '%';
}

function update () {
    bookCounter = library.length - 1;
    bookQuantityDisplay.innerHTML = bookCounter;

    console.log(library.length);

    pageLoopCounter();
    bookFinishedLoop();
}

function buttonFlipper (){
    if (this.innerHTML === 'Finished ✔') {
        this.innerHTML = 'Not Read ×';
        
        booksFinishedCounter--;
        booksFinishedDisplay.innerHTML = booksFinishedCounter;
        if (this.parentElement.parentElement.classList.contains('finished')) {
            booksFinishedDisplay.innerHTML = parseInt(booksFinishedDisplay.innerHTML - 1);
        }
    } else if (this.innerHTML === 'Not Read ×') {
        this.innerHTML = 'Finished ✔';
        
        booksFinishedCounter++;
        booksFinishedDisplay.innerHTML = booksFinishedCounter;
        if (this.parentElement.parentElement.classList.contains('finished')) {
            booksFinishedDisplay.innerHTML = parseInt(booksFinishedDisplay.innerHTML + 1);
        }
    }
    update();
}

function removeBook() {
    const bookDiv = event.target.closest('.book');
    const index = Array.from(libraryContainer.children).indexOf(bookDiv);
    
    library.splice(index, 1);
    bookDiv.remove();
    
    bookCounter--;
    bookQuantityDisplay.innerHTML = bookCounter;
    update();
}

function renderLibrary () {
    libraryContainer.innerHTML = '';
    library.forEach((book) => {
        const bookDiv = createBookDiv(book);
        libraryContainer.appendChild(bookDiv);
    });
}

function createBookDiv (book) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    if (book.title === '+') {
        console.log('here');
        const addButton = document.createElement('button');
        addButton.setAttribute('type', 'button');
        addButton.setAttribute('value', 'Add Child');
        addButton.setAttribute('id', 'add-book');
        addButton.setAttribute('class', 'additional-book');
        addButton.innerHTML = '+';
        addButton.addEventListener('click', showForm)
        bookDiv.appendChild(addButton);
    } else {
        const titlePhrase = document.createElement('p');
        titlePhrase.classList.add('book-title');
        titlePhrase.textContent = `Title: ${book.title}`;

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
        readButton.textContent = book.readOrNot ? 'Finished ✔' : 'Not Read ×';
        readButton.addEventListener('click', buttonFlipper);
        readOrNotDiv.appendChild(readButton);

        const deleteButton = document.createElement('a');
        deleteButton.href = 'javascript:void(0)';
        deleteButton.classList.add('delete-book');
        deleteButton.setAttribute('onClick', 'removeBook()');
        deleteButton.textContent = '×';

        buttonBoxDiv.appendChild(readOrNotDiv);
        buttonBoxDiv.appendChild(deleteButton);

        bookDiv.appendChild(titlePhrase);
        bookDiv.appendChild(authorPhrase);
        bookDiv.appendChild(pagesPhrase);
        bookDiv.appendChild(publishedPhrase);
        bookDiv.appendChild(buttonBoxDiv);
    }
    return bookDiv;
}

formAddBook.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
    formAddBook.reset();
});

function validateForm() {
    console.log('validated');
    let titleBook = document.getElementById('book-title').value;
    let authorBook = document.getElementById('author').value;
    let pagesNumber= document.getElementById('pages-number').value;
    let publishedDate= document.getElementById('published-date').value;
    let readBookOrNot = document.getElementById('read-part-form');
    console.log(titleBook);
    let book = new Book(titleBook, authorBook, pagesNumber, publishedDate, readBookOrNot);
    library.push(book);
    
    const bookDiv = createBookDiv(book);
    libraryContainer.appendChild(bookDiv);
    closeAddBook();
    update();
}

function Book(titleBook, authorBook, pagesNumber, publishedDate, readBookOrNot) {
    this.title = titleBook;
    this.author = authorBook;
    this.pages = pagesNumber;
    this.published = publishedDate;
    this.readOrNot = readBookOrNot;
}

function closeAddBook() {
    modal.style.display = "none";
    mainContainer.style.filter = "none";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
    mainContainer.style.filter = "none";
}

// When the user clicks anywhere outside of the form, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        mainContainer.style.filter = "none";
    }
}

window.onload = function () {
    renderLibrary();
}

function startUp() {
    hardCodedBooks();
    update();
}

startUp();
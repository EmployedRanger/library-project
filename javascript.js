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
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-form")[0];

// When the user clicks the button, open the modal 
addBook.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == addBookContainer) {
        addBookContainer.style.display = "none";
        mainContainer.style.filter = "none";
    }
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  mainContainer.style.filter = "blur(2px)"
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  mainContainer.style.filter = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    mainContainer.style.filter = "none";
  }
}

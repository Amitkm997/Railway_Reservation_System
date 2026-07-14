// Get books from localStorage

const books = JSON.parse(localStorage.getItem("books")) || [];

// Total Books
const totalBooks = books.length;

// Available Books
const availableBooks = books.filter(function(book){

    return book.availableCopies > 0;

}).length;

// Borrowed Books
const borrowedBooks = books.filter(function(book){

    return book.availableCopies == 0;

}).length;

// Display Data
document.getElementById("totalBooks").innerText = totalBooks;

document.getElementById("availableBooks").innerText = availableBooks;

document.getElementById("borrowedBooks").innerText = borrowedBooks;
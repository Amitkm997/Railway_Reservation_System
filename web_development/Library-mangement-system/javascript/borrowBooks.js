// Get Form
const borrowForm = document.getElementById("borrowForm");

// Submit Event
borrowForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Get Input Values
    const bookId = document.getElementById("bookId").value;
    const studentName = document.getElementById("studentName").value;
    const studentEmail = document.getElementById("studentEmail").value;

    // Get Data from localStorage
    let books = JSON.parse(localStorage.getItem("books")) || [];
    let borrowRecords = JSON.parse(localStorage.getItem("borrowRecords")) || [];

    // Find Book
    const book = books.find(function(book){
        return book.bookId === bookId;
    });

    // Book Not Found
    if(!book){
        alert("Book Not Found!");
        return;
    }

    // Check Availability
    if(book.availableCopies === 0){
        alert("Book is not available!");
        return;
    }

    // Update Book
    book.availableCopies--;

    if(book.availableCopies === 0){
        book.status = "Borrowed";
    }

    // Create Borrow Record
    const borrowData = {

        bookId: book.bookId,
        title: book.title,
        studentName: studentName,
        studentEmail: studentEmail,
        borrowDate: new Date().toLocaleDateString(),
        status: "Borrowed"

    };

    // Save Borrow Record
    borrowRecords.push(borrowData);

    // Save Updated Data
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("borrowRecords", JSON.stringify(borrowRecords));

    alert("Book Borrowed Successfully!");

    // Clear Form
    borrowForm.reset();

});
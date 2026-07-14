// Get Form
const returnForm = document.getElementById("returnForm");

// Form Submit
returnForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Get Input Values
    const bookId = document.getElementById("bookId").value;
    const studentEmail = document.getElementById("studentEmail").value;

    // Get Data from localStorage
    let books = JSON.parse(localStorage.getItem("books")) || [];
    let borrowRecords = JSON.parse(localStorage.getItem("borrowRecords")) || [];

    // Find Borrow Record
    const record = borrowRecords.find(function(item){

        return item.bookId === bookId &&
               item.studentEmail === studentEmail &&
               item.status === "Borrowed";

    });

    // If record not found
    if(!record){
        alert("No Borrow Record Found!");
        return;
    }

    // Update Borrow Record
    record.status = "Returned";

    // Update Book
    books.forEach(function(book){

        if(book.bookId === bookId){

            book.availableCopies++;

            if(book.availableCopies > 0){
                book.status = "Available";
            }

        }

    });

    // Save Updated Data
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("borrowRecords", JSON.stringify(borrowRecords));

    alert("Book Returned Successfully!");

    // Reset Form
    returnForm.reset();

});
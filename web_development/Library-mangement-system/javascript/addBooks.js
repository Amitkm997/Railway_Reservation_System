// Get Form
const bookForm = document.getElementById("bookForm");

// Add Event Listener
bookForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get Input Values
    const bookId = document.getElementById("bookId").value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    const publisher = document.getElementById("publisher").value;
    const year = document.getElementById("year").value;
    const copies = Number(document.getElementById("copies").value);

    // Get Books from Local Storage
    const books = JSON.parse(localStorage.getItem("books")) || [];

    // Check if Book ID already exists
    const bookExists = books.find(function (book) {
        return book.bookId === bookId;
    });

    if (bookExists) {
        alert("Book ID already exists!");
        return;
    }

    // Create Book Object
    const newBook = {
        bookId: bookId,
        title: title,
        author: author,
        category: category,
        publisher: publisher,
        year: year,
        copies: copies,
        availableCopies: copies,
        status: "Available"
    };

    // Add Book
    books.push(newBook);

    // Save to Local Storage
    localStorage.setItem("books", JSON.stringify(books));

    alert("Book Added Successfully!");

    // Reset Form
    bookForm.reset();

});
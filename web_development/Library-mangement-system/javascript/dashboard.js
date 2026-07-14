// Get Data from localStorage
const books = JSON.parse(localStorage.getItem("books")) || [];
const borrowRecords = JSON.parse(localStorage.getItem("borrowRecords")) || [];

// Total Books
document.getElementById("totalBooks").innerText = books.length;

// Available Books
const availableBooks = books.filter(function(book){
    return book.availableCopies > 0;
}).length;

document.getElementById("availableBooks").innerText = availableBooks;

// Borrowed Books
const borrowBooks = books.filter(function(book){
    return book.availableCopies === 0;
}).length;

document.getElementById("borrowBooks").innerText = borrowBooks;

// Borrow Records
document.getElementById("borrowRecords").innerText = borrowRecords.length;

// Display Borrow Records
const recordTable = document.getElementById("recordTable");

if(borrowRecords.length === 0){

    recordTable.innerHTML = `
        <tr>
            <td colspan="6">No Borrow Record Found</td>
        </tr>
    `;

}
else{

    borrowRecords.forEach(function(record){

        recordTable.innerHTML += `
            <tr>
                <td>${record.bookId}</td>
                <td>${record.title}</td>
                <td>${record.studentName}</td>
                <td>${record.studentEmail}</td>
                <td>${record.borrowDate}</td>
                <td>${record.status}</td>
            </tr>
        `;

    });

}
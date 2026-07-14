// Get books from localStorage
let books = JSON.parse(localStorage.getItem("books")) || [];

// HTML Elements
const tableBody = document.getElementById("bookTableBody");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

// Display Books
function displayBooks(bookList){

    tableBody.innerHTML = "";

    if(bookList.length === 0){

        tableBody.innerHTML = `
            <tr>
                <td colspan="10">No Books Found</td>
            </tr>
        `;

        return;
    }

    bookList.forEach(function(book,index){

        tableBody.innerHTML += `
            <tr>
                <td>${book.bookId}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.category}</td>
                <td>${book.publisher}</td>
                <td>${book.year}</td>
                <td>${book.copies}</td>
                <td>${book.availableCopies}</td>
                <td>${book.status}</td>
                <td>
                    <button class="delete-btn" onclick="deleteBook(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;

    });

}

// Delete Book
function deleteBook(index){

    const confirmDelete = confirm("Are you sure you want to delete this book?");

    if(confirmDelete){

        books.splice(index,1);

        localStorage.setItem("books",JSON.stringify(books));

        displayBooks(books);

    }

}

// Search Books
searchInput.addEventListener("keyup",function(){

    const searchValue = searchInput.value.toLowerCase();

    const filteredBooks = books.filter(function(book){

        return book.title.toLowerCase().includes(searchValue);

    });

    displayBooks(filteredBooks);

});

// Filter Books
categoryFilter.addEventListener("change",function(){

    const selectedCategory = categoryFilter.value;

    if(selectedCategory === "All"){

        displayBooks(books);

    }
    else{

        const filteredBooks = books.filter(function(book){

            return book.category === selectedCategory;

        });

        displayBooks(filteredBooks);

    }

});

// Initial Display
displayBooks(books);
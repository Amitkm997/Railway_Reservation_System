const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// If user is not logged in
if (!currentUser) {
    alert("Please Login first");
    window.location.href = "login.html";
}

// Get form
const profileForm = document.getElementById("profileForm");

// Fill form
document.getElementById("name").value = currentUser.name;
document.getElementById("email").value = currentUser.email;

document.getElementById("branch").value = currentUser.branch;
document.getElementById("year").value = currentUser.year;

// Update profile
profileForm.addEventListener("submit", function(event){

    event.preventDefault();

    // Get updated values
    currentUser.name = document.getElementById("name").value;
    
    currentUser.branch = document.getElementById("branch").value;
    currentUser.year = document.getElementById("year").value;

    // Save current user
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    // Get all students
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Update student
    students = students.map(function(student){

        if(student.email === currentUser.email){
            return currentUser;
        }

        return student;

    });

    // Save updated students
    localStorage.setItem("students", JSON.stringify(students));

    alert("Profile Updated Successfully!");

});
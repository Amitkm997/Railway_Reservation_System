const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get Form Values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const branch = document.getElementById("branch").value;
    const year = document.getElementById("year").value;

    // Basic Validation
    if (name === "" || email === "" || password === "" || branch === "" || year === "") {
        alert("Please fill all the fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Student Object
    const student = {
        name,
        email,
        password,
        branch,
        year
    };

    // Get Existing Students
    let students = JSON.parse(localStorage.getItem("students")) || [];

    // Check Duplicate Email
    const existingStudent = students.find(function (item) {
        return item.email.toLowerCase() === email.toLowerCase();
    });

    if (existingStudent) {
        alert("Student is already registered.");
        return;
    }

    // Save Student
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration Successful!");

    // Clear Form
    registerForm.reset();

    // Redirect to Login Page
    window.location.href = "login.html";
});
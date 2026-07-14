const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let students = JSON.parse(localStorage.getItem("students")) || [];

    const user = students.find(function (student) {

        return (
            student.email.toLowerCase() === email.toLowerCase() &&
            student.password === password
        );

    });

    if (user) {

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Login Successful");

        window.location.href = "jobs.html";

    } else {

        alert("Invalid Email or Password");

    }

});
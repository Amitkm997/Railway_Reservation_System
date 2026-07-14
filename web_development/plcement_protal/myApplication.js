const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// if user is not logged in
if (currentUser == null) {
    alert("Please login First");
    window.location.href = "login.html";
}

// get all applications
const applications = JSON.parse(localStorage.getItem("applications")) || [];

const applicationConatiner = document.getElementById("applicationContainer");

// filter applications of current user
const myApplications = applications.filter(function(application) {
    return application.email === currentUser.email;
});

// if no application found
if (myApplications.length == 0) {

    applicationConatiner.innerHTML = "<h2>No Application Found</h2>";

}
else {

    myApplications.forEach(function(application) {

        const card = document.createElement("div");

        card.className = "application-card";

        card.innerHTML = `
            <h2>${application.company}</h2>

            <p><strong>Student :</strong> ${application.studentName}</p>

            <p><strong>Role :</strong> ${application.role}</p>

            <p><strong>Package :</strong> ${application.package}</p>

            <p class="status">
                <strong>Status :</strong> Applied
            </p>
        `;

        applicationConatiner.appendChild(card);

    });

}
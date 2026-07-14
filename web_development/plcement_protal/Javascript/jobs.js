const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get logged in user
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!currentUser) {
            alert("Please Login First");
            window.location.href = "login.html";
            return;
        }

        // Get existing applications
        let applications =
            JSON.parse(localStorage.getItem("applications")) || [];

        // Check duplicate application
        const alreadyApplied = applications.find(function (item) {

            return (
                item.email === currentUser.email &&
                item.company === button.dataset.company
            );

        });

        if (alreadyApplied) {
            alert("You have already applied for this job.");
            return;
        }

        // Create application object
        const application = {
            studentName: currentUser.name,
            email: currentUser.email,
            company: button.dataset.company,
            role: button.dataset.role,
            package: button.dataset.package
        };

        // Save application
        applications.push(application);

        localStorage.setItem(
            "applications",
            JSON.stringify(applications)
        );

        alert("Application Submitted Successfully!");

    });

});
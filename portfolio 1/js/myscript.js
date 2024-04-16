document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("contact-me");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // if checkDate and checkEmails functions are true then the form is valid
        if (checkDate() && checkEmails()) {
            validateForm();
        }
    });
    
    // checks if the selected project date is a day ahead of the current date
    function checkDate() {
        const currentDate = new Date();
        if (new Date(form["project-date"].value) < currentDate) {
            form["project-date"].setCustomValidity('Invalid date');
            return false;
        } else {
            form["project-date"].setCustomValidity('');
            return true;
        }
    }

    // checks if the emails given match
    function checkEmails() {
        if (form.email.value === form.confirmEmail.value) {
            form.confirmEmail.setCustomValidity('');
            return true;
        } else {
            form.confirmEmail.setCustomValidity('The emails do not match.');
            return false;
        }
    }

    /* outputs a pop-up detailing what the user is sending to the person
        using the data the user has given in the form
    */
    function validateForm() {
        if (window.confirm("You are sending an enquiry to Jia at 230123180@aston.ac.uk. \n" +
            "Enquiry details:\n" +
            "Name: " + form.name.value + "\n" +
            "Description: " + form.txtAr.value + "\n" +
            "Project Date: " + form["project-date"].value + "\n" +
            "Duration: " + form.duration.value + "\n" +
            "Email: " + form.confirmEmail.value + "\n" + "Proceed?")) {
            window.alert("You have sent an email to Jia.");
        }
    }
});



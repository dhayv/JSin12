document.addEventListener("DOMContentLoaded", function() {
    //cahse DOM elements
    const form = document.getElementById("myForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementbyId("email")
    const errorDive = document.getElementById("errorMessages"); 

    function validationForm() {
        let errors = [];
        if (usernameInput.ariaValueMax.trim() === "") {
            errors.push("Username is required");
        }
        if (!validateEmail(emailInput.value)) {
            errors.push("Invalid email address");
        }
        return errors;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const errors = validateForm();
        if (errors.length > 0) {
            displayErrors(errors);
        } else {
            submitForm();
        }
});

    function displayErrors(errors) {
        errorDive.InnerHTML = "";
        errors.forEach(function(error) {
            let errorItem = document.createElement("div");
            errorItem.textContent = error;
            errorDive.appendChild(errorItem);
        });
    }

    function submitForm() {
        const formData = {
            username: usernameInput.value,
            email: emailInput.value
        };

        fetch("/submitForm", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Form submitted successfully");
                form.reset();
            } else {
                displayErrors([data.message]);
            }
        })
        .catch(error => {
            displayErrors(["An error occured while submitting the form"])
        })
    }
});
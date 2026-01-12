document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const response = document.getElementById("response");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || message === "") {
            response.textContent = "Please fill out all fields.";
            response.style.color = "red";
        } else {
            response.textContent = "Thank you for contacting us, " + name + "!";
            response.style.color = "green";
            form.reset();
        }
    });

});

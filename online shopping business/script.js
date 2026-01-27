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

    // CONTACT FORM
    contactForm?.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const message = document.getElementById("message")?.value.trim();
        const response = document.getElementById("response");

        if (!name || !message) {
            response.textContent = "Please fill out all fields.";
            response.style.color = "red";
            return;
        }

        response.textContent = "Submitting message...";
        response.style.color = "black";

        const result = await waitForResponse();

        if (result.status === "success") {
            response.textContent = "Thank you for contacting us, " + name + "!";
            response.style.color = "green";
            contactForm.reset();
        }
    });

    // LOGIN FORM
    loginForm?.addEventListener("submit", async function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail")?.value.trim();
        const password = document.getElementById("loginPassword")?.value;
        const response = document.getElementById("loginResponse");

        if (!email || !password) {
            response.textContent = "Please fill out all fields.";
            response.style.color = "red";
            return;
        }

        response.textContent = "Logging in...";
        response.style.color = "black";

        await waitForResponse();

        response.textContent = "Login successful! Redirecting...";
        response.style.color = "green";
        
        setTimeout(() => {
            window.location.href = "profile.html";
        }, 1500);
    });

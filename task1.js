document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.animate').forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 * index);
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields!");
        } else if (!email.includes("@")) {
            alert("Please enter a valid email!");
        } else {
            alert("Form submitted successfully!");
            this.reset();
        }
    });
});

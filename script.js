const form = document.querySelector(".contact-form");


form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);

    // Send data using fetch
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
    });

    if (response.ok) {
        alert("Message sent successfully!");
        form.reset(); // ✅ This clears the form
    } else {
        alert("There was an error. Please try again.");
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvas = document.querySelector('#offcanvasNavbar');
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
        if (bsOffcanvas) {
            bsOffcanvas.hide();
        }
    });
});
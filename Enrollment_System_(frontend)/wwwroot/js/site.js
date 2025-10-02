document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar-link");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // prevent jumping to top if href="#"

            // Remove active from all
            links.forEach(l => l.classList.remove("active"));

            // Add active to clicked
            this.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navBtns = document.querySelectorAll(".nav-btn");

    navBtns.forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault(); // stops page jump if href="#"

            // Remove active from all
            navBtns.forEach(b => b.classList.remove("active"));

            // Add active to clicked one
            this.classList.add("active");
        });
    });
});


const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("fileInput");
const form = dropArea.closest("form");

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
});

// Highlight area
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add("dragover"));
});
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove("dragover"));
});

// Handle drop
dropArea.addEventListener("drop", (e) => {
    fileInput.files = e.dataTransfer.files; // Attach files to input
    form.submit(); // Auto-submit form
});

// Handle manual input
fileInput.addEventListener("change", () => {
    form.submit();
});


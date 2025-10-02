document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
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


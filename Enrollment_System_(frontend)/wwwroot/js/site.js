// Sidebar highlight
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".sidebar-link");

    if (links.length > 0) {
        links.forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                links.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            });
        });
    }
});

// Drag & Drop upload
document.addEventListener("DOMContentLoaded", function () {
    const dropArea = document.getElementById("drop-area");
    const fileInput = document.getElementById("fileInput");

    if (dropArea && fileInput) {
        const form = dropArea.closest("form");

        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.add("dragover"));
        });
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.remove("dragover"));
        });

        dropArea.addEventListener("drop", (e) => {
            fileInput.files = e.dataTransfer.files;
            form.submit();
        });

        fileInput.addEventListener("change", () => {
            form.submit();
        });
    }
});

// Enrollment dashboard nav functionality
document.addEventListener("DOMContentLoaded", () => {
    const navBtns = document.querySelectorAll(".nav-btn");
    const mainZone = document.getElementById("MainContentZone");

    if (navBtns.length > 0 && mainZone) {
        navBtns.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();

                // Switch active state
                navBtns.forEach(b => b.classList.remove("active"));
                this.classList.add("active");

                const url = this.getAttribute("href");
                if (url && url !== "#") {
                    fetch(url)
                        .then(r => r.text())
                        .then(html => mainZone.innerHTML = html)
                        .catch(err => mainZone.innerHTML = `<p class="text-danger">Error: ${err}</p>`);
                }
            });
        });

        // Load Enrollment by default on first page load
        const first = navBtns[0];
        if (first && first.getAttribute("href") !== "#") {
            fetch(first.getAttribute("href"))
                .then(r => r.text())
                .then(html => mainZone.innerHTML = html);
        }
    }
});

// Enrollment form dropdown functionality
// Enrollment form dropdown functionality
function initEnrollmentDropdown() {
    const dropdown = document.getElementById("enrollmentType");
    const zone = document.getElementById("PartialViewZone");

    if (dropdown && zone && !dropdown.dataset.initialized) {
        function loadPartial(url) {
            if (!url) {
                zone.innerHTML = "";
                return;
            }
            fetch(url)
                .then(r => r.text())
                .then(html => zone.innerHTML = html)
                .catch(err => zone.innerHTML = `<p class="text-danger">Error: ${err}</p>`);
        }

        dropdown.addEventListener("change", () => loadPartial(dropdown.value));

        // ✅ Default to Regular only the first time
        dropdown.selectedIndex = 1;
        loadPartial(dropdown.value);

        // Mark as initialized so it won't re-bind again
        dropdown.dataset.initialized = "true";
    }
}

// Watch for when Enrollment partial gets loaded
document.addEventListener("DOMContentLoaded", () => {
    const mainZone = document.getElementById("MainContentZone");

    if (mainZone) {
        const observer = new MutationObserver(() => {
            initEnrollmentDropdown();
        });

        observer.observe(mainZone, { childList: true, subtree: true });
    }

    // In case Enrollment is already on page load
    initEnrollmentDropdown();
});



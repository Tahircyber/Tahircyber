    document.addEventListener("DOMContentLoaded", function () {
        const currentPage = window.location.pathname.split("/").pop(); // Get the current file name
        document.querySelectorAll("nav a").forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    });



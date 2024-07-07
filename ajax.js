document.addEvenetListener("DOMContentLoaded", function() {
    let currentPage = 1;
    const resultContainer = document.getElementById("resultContainer");
    const loadMoreButton = document.getElementById("loadMoreButton");

    loadPage(currentPage);

    loadMoreButton.addEventListener("click", function() {
        loadPage(++currentPage);
    });

    function loadPage(page) {

        fetch(`/getData?page=${page}`)
            .then(response => response.json())
            .then(data => {
                renderResults(data.results);
                if (!data.hasMore) {
                    loadMoreButton.style.display = "none";
                }
            })
            .catch(error => {
                console.log("Error loading data:", error);
                alert("Failed to load data. Please try again later.");
                
            });
    }

    function renderResults(results) {

        results.forEach(results => {
            let resultItem = document.getElementById("div");
            resultItem.className = "result-item";
            resultItem.textContent = result.name;
            resultContainer.appendChild(resultItem);
            
        });
    }
});
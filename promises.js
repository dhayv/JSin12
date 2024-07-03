let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
})

promise.then(result => console.log(result)).catch(error => console.log(error));

async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetchin data:", error);

    }
}


// Fetch Api

// Get request from api

fetch("https://api.example.com")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log("Error:", error))

fetch("https://api.exxample.com", {
    methon: "POSt",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({name: "John", age: 30})
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error))
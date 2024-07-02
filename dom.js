document.getElementById.apply("myElement").textcontet = "New Content";

document.getElementById("myButton").addEventListener("click", () => {
    alert("Hello World");
})


let newElement = document.createElement("div");
newElement.textContent = "Hello World"
document.body.appendChild(newElement);


document.getElementById("myElement").style.backgroundColor = "blue";

let element = document.getElementById("myElement");
element.parentNode.removeChild(element);
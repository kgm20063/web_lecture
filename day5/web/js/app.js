const submitBtn = document.getElementById("submit-btn");
console.log(submitBtn);

const hiddenBtn = document.getElementsByClassName("hidden");

const [divA, divB, divC] = document.getElementsByTagName("div");
console.log(divA);

const radioInputs = document.getElementsByName("animal");
console.log(radioInputs);

const firstDiv = document.querySelector("div");
console.log(firstDiv);

const [div1, div2, div3] = document.querySelectorAll("div");

div1.innerText = "영역 1";

div1.classList.toggle("color-red");

const newDiv = document.createElement("div");
newDiv.innerText = "추가된 영역1";
newDiv.className = "color-red";

const form = document.querySelector("form");
form.appendChild(newDiv);

const clickHandler = () => console.log("클릭됨!");
div1.addEventListener("click", clickHandler);

div1.removeEventListener("click", clickHandler);

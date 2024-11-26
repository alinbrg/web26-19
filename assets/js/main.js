import { data } from "./data.js";

// selectors
const paragraph = document.querySelector("p");
const firstSection = document.querySelector("section");
const sections = document.querySelectorAll("section");
const secednSection = document.querySelectorAll("section")[1];
const images = firstSection.querySelectorAll("img");
const button = firstSection.querySelector("button");
const button2 = secednSection.querySelector("button");
const div = document.querySelector(".products-wrapper");

// creating elements

const newParagraph = document.createElement("p");
// console.log(newParagraph);

// edit text
newParagraph.textContent = `I am a new  paragraph`;
// paragraph.innerText = "I am a new paragraph";
// paragraph.innerHTML = "<span>I am a new paragraph</span>";

// appending elements
secednSection.appendChild(newParagraph);
// secednSection.append(newParagraph, paragraph)
// secednSection.insertAdjacentElement("beforebegin", newParagraph);

//edit styles

// firstSection.style.backgroundColor = "blue";
// firstSection.style.padding = "30px";

firstSection.classList.add("bg-blue");
firstSection.classList.remove("bg-blue");
firstSection.classList.replace("bg-blue", "bg-green");

//edit attributes
firstSection.getAttribute("class");
// img.getAttribute("src");
// img.setAttribute("src", "assets/img/4.jpg");
// img.removeAttribute("src");

// input.setAttribute("type", "password");

// images.forEach((img) => {
// 	img.setAttribute("src", "assets/img/4.jpg");
// });

// events
// click, mouseover, mouseout, keyup, keydown, keypress, submit, change
function handleClick(event) {
	event.stopPropagation();
	// console.log(event.target);
	// console.log("button clicked");

	firstSection.classList.toggle("bg-blue");
}

button.addEventListener("click", handleClick);
// button2.removeEventListener("click", handleClick);

button2.addEventListener(
	"click",
	(e) => {
		// console.log(e.target);
		div.innerHTML = renderHTML(data);
	},
	{ once: true }
);

firstSection.addEventListener("click", (e) => {
	firstSection.append(newParagraph);
});
//render html

function renderHTML(data) {
	const forematedData = data.map(
		(el) =>
			`<div class="bg-green">
        <h2>${el.title} </h2>
        <img class="rounded" src='${el.photos[0].large}' />
      </div>`
	);

	return forematedData.join("");
}
// console.log(data);
// console.log(renderHTML(data));

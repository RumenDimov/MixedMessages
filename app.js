import Verses from "./data.js";

//store input value
let name = prompt("What is your name? ");

//save the h1 as a variable
let heading = document.getElementById("title");

//add the input value to h1
heading.textContent += name;


// generate a random number based on array length
let randomNumber = Math.floor(Math.random() * Verses.length)

//store the name and text keys into separate variables
let randomVerse = Verses[randomNumber]['name'];
let randomText = Verses[randomNumber]['text'];


//replace the h4 and p tag in HTML by replacing the content with the randomly selected verses
document.getElementById("verse").textContent = randomVerse;
document.getElementById("text").textContent = randomText;
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Created a quotes array to store quotes and their information as objects

const quotes = [
  {
    quote: "Fear is the mind-killer.",
    source: "Lady Jessica Atreides",
    citation: "Dune: Part One",
    year: "",
  },
  {
    quote: "I will take the ring though I do not know the way.",
    source: "Frodo Baggins",
    citation: "Lord of the Rings: The Fellowship of the Ring",
    year: "",
  },
  {
    quote: "Every man dies, not every man really lives.",
    source: "William Wallace",
    citation: "Braveheart",
    year: "",
  },
  {
    quote:
      "It is not in doing what you like, but in liking what you do that is the secret of happiness.",
    source: "Peter Pan",
    citation: "Peter Pan",
    year: "",
  },
  {
    quote:
      "You will never truly know yourself, or the strength of your relationships, until both have been tested by adversity.",
    source: "J.K Rowling",
    citation: "J.K. Rowling",
    year: "2008",
  },
];

// Created a function that generates a random number and returns a quote from the selected array

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * 5);
  let randomObject = quotes[randomNumber];
  return randomObject;
}

// Created a function that displays the selected random quote

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class = "quote">${randomQuote["quote"]}</p>
        <p class = "source">${randomQuote["source"]}`;

  if (randomQuote["citation"]) {
    html += `<span class = "citation" >${randomQuote["citation"]}</span>`;
  }

  if (randomQuote["year"]) {
    html += `<span class = "year">${randomQuote["year"]}</span>`;
  }
}

// Created functions to generate a random background color for each quote displayed

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const red = getRandomNumber(0, 255);
  const green = getRandomNumber(0, 255);
  const blue = getRandomNumber(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

let lastQuoteIndex = -1;

// Created a a function so that a the same quote cannot be displayed twice in a row

function getRandomQuote() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * 5);
  } while (randomNumber === lastQuoteIndex);

  lastQuoteIndex = randomNumber;
  console.log(quotes[randomNumber].quote);
  return quotes[randomNumber];
}

// Created a function to display the random quote and its properties

function printQuote() {
  document.body.style.backgroundColor = getRandomColor();
  const quoteBox = document.getElementById("quote-box");
  quoteBox.innerHTML = "";
  let randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote["quote"]}</p>
    <p class="source">${randomQuote["source"]}
    `;

  if (randomQuote["citation"]) {
    html += `<span class="citation">${randomQuote["citation"]}</span>`;
  }

  if (randomQuote["year"]) {
    html += `<span class="year">${randomQuote["year"]}</span>`;
  }

  html += "</p>";

  document.getElementById("quote-box").innerHTML = html;
}

// Calls printQuote function to display a quote once the page loads

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);

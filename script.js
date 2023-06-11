const btnEl = document.getElementById("btn");
const apiURL = "https://api.quotable.io/random";
const thequoteEl = document.getElementById("the-quote");
const authorEl = document.getElementById("author");

async function getQuote() {
    try {

        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        const response = await fetch(apiURL);
        const result = await response.json();

        thequoteEl.innerText = result.content;
        authorEl.innerText = result.author;
        btnEl.disabled = false;
        btnEl.innerText = "Get a quote";

    } catch (error) {
        thequoteEl.innerText = "Error occured! Please check your internet and try again.";
        authorEl.style.display = "none";
        btnEl.innerText = "Get a quote";
    }
}

getQuote();

btnEl.addEventListener("click", getQuote);
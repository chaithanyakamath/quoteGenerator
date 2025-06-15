const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
     // Re-trigger fade-in animation
    quote.classList.remove("fade-in");
    void quote.offsetWidth; // Forces reflow
    quote.classList.add("fade-in");

    author.classList.remove("fade-in");
    void author.offsetWidth;
    author.classList.add("fade-in");

    try {
        const response = await fetch(url);
        const data = await response.json();  
        quote.innerHTML = data.content;
        author.innerHTML = ` ${data.author}`;
    } catch (error) {
        quote.innerHTML = "Failed to fetch quote.";
        author.innerHTML = "";
        console.error("Error fetching quote:", error);
    }   }

        getQuote(api_url);
const quotes=[
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Life is what happens when you're busy making other plans. -John Lennon",
    "Get busy living or get busy dying. -Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. -Brain Tracy",
    "Believe you can and you're halfway there. -Thedre Roosevelt"
];

const quoteDisplay=document.getElementById('quoteDisplay');
const newQuoteBtn=document.getElementById('newQuoteBtn');
const shareQuoteBtn=document.getElementById('shareQuoteBtn');

//Function to display a random quote
function displayRandomQuote(){
    const randomIndex=Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent=quotes[randomIndex];
}

//Function to share the quote
function shareQuote(){
    const quote=quoteDisplay.textContent;
    const url='https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}';
    window.open(url,'_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click',displayRandomQuote);
shareQuoteBtn.addEventListener('click',shareQuote);

//Display a random quote on page load
window.onload=displayRandomQuote;
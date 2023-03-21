const quoteContainer = document.getElementById('quote_generator');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new_quote');
const loader = document.getElementById('loader');






let apiQuotes = [];

let getQuotes= () => {
    fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data)=>{
     apiQuotes = data
     newQuote();
    })
    .catch(error => console.log("error ", error ))
}


// Show New Quote
function newQuote(){
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //Check if Author field is blank and replace it with 'Unknown'
    if(!quote.author ){
        authorText.textContent = 'Unknown';
    }else{
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if(quote.text.length > 120){
        quoteText.classList.add('long_quote');
    }else{
        quoteText.classList.remove('long_quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    
}


 // Event Listeners
 newQuoteBtn.addEventListener('click' , newQuote);


getQuotes();
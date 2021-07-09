import "./style.css";
const quoteContainer=document.getElementById("quote-container");
const quoteContent=document.getElementById("quote-content");
const quoteAuthor=document.getElementById("quote-author");
const twitterButton=document.getElementById("twitter");
const whatsappButton=document.getElementById("whatsapp");
const newquoteButton=document.getElementById("new quote");
const instagramButton=document.getElementById("instagram");
const loader=document.getElementById("loader");

function loading(){
    loader.hidden=false;
    quoteContainer.hidden=true;
}

function complete(){
    if(!loader.hidden){
        loader.hidden=true;
        quoteContainer.hidden=false;
    }
}
async function getQUOTE(){
    loading();
 const url= "https://api.quotable.io/random";
 try{

     const r = await fetch(url);
     const data= await r.json();
     data.length=150;
     quoteAuthor.innerText=data.author;
     if(data.length>120){
       quoteContent.classList.add('long-quote');
     }
     else{
        quoteContent.classList.remove('long-quote');
     }
    quoteContent.innerText = data.content;
    complete();
    }
 catch(e){
     console.log("Error");
    }
}   
function tweetQuote(){
    const tweetURL =`https://twitter.com/intent/tweet?text=${quoteContent.innerText}%0a-${quoteAuthor.innerText}`;
    window.open(tweetURL,'_blank');
}
function postQuote(){
    const postURL =`https://ig.me/send?text=${quoteContent.innerText}%0a-${quoteAuthor.innerText}`;
    window.open(postURL,'_blank');
    //https://applink.instagram.com
    
}




function shareQuote(){
    
    //const text=`https://api.whatsapp.com/send?phone=number&text=${quoteContent.innerText}-${quoteAuthor.innerText}`;
     
    //const text=`https://wa.me/send?text=${quoteContent.innerText}-${quoteAuthor.innerText}`;
     
    const text=`https://api.whatsapp.com/send?text=${quoteContent.innerText}%0a-${quoteAuthor.innerText}`;
     
     
    window.open(text,'_blank');

}


newquoteButton.addEventListener("click",getQUOTE);
twitterButton.addEventListener("click",tweetQuote);
whatsappButton.addEventListener("click",shareQuote);
instagramButton.addEventListener("click",postQuote);


getQUOTE();
// openWhatsApp();
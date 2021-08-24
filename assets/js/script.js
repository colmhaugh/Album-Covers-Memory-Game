/*  make card flipCard when clicked
 create a list of the memory cards and store it in cards.
 for each of the cards in the list we call the flipCard function.
 adding an event listner to listen out for a click on the card
 When  a card is clicked, it will call flipCard function */

const cards = document.querySelectorAll(".memory-card");
var noOfCards = 12;
let userName;

let hasFlippedCard = false;
let firstCard, secondCard;

/* Pop up message */
function userAlert() { 
    userName = prompt('Please enter your name', String);  
    alert(`
    Hi ${userName}, 
    Please read the instructions below and press OK when you are ready.
        INSTURCTIONS
    Object of the Game:
    Find the pairs of matching cards.    
    The cards are layed out face down.  
    There are 6 pairs of album covers.  
    Please turn over one card and then try to find a matching card.     `
    ); 
   
}



/*Using toggle to add flip class to memory card that was selected and removing it if it is present*/

function flipCard(){
    /* this.classList.toggle('flip'); */

    this.classList.add('flip');
        /* click a card, if it is the first card turned it will become the first card flipped */
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        /* when the first card is flipped and the player selects the another card, it will become secondCard */        
    secondCard = this;

        /* has flipped will then go back to false */
    hasFlippedCard = false;

    /* player has now selected two cards.  Call a function to check if they are matched */
    checkForMatch();
}

function checkForMatch(){
    /* Check if the dataset-band from the memory card on firstCard and secondCard match */
    if (firstCard.dataset.band === secondCard.dataset.band){        
        /*if the cards match then leave the cards faced up and remove the click option */
        disableCards();

        /* Play clip from album */
        playSound();
        noOfCards = noOfCards - 2;
        if (noOfCards == 0){
            alert(`CONGRATLATIONS ${userName},
            You have a great memory`);
        }
        return;
    }
    /*if the cards don't match then flip the cards back over again */
    unflipCards();
}

/* Function called when the cards matched.  It removed the event listener so the cards can't be selected again */
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

/* Function called when the cards dont match.  We remove the flip class that was added when they were selected.  Cards flip back after half a second */
function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 500);

}

    /* listens out for user to click a card and then calls flipCard function */
cards.forEach(card => card.addEventListener('click', flipCard));


    /* shuffle cards to create a rand list of cards, Start button calls this function and the game begins */
function shuffleCards() {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 12);
        card.style.order = randomOrder;
    });
}
 /* Function to play sound when cards are matched */
function playSound(){
    var x = document.getElementById("myAudio");   
    x.play(); 
} 


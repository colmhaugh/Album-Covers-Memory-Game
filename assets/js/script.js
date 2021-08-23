/*  make card flipCard when clicked
 create a list of the memory cards and store it in cards.
 for each of the cards in the list we call the flipCard function.
 adding an event listner to listen out for a click on the card
 When  a card is clicked, it will call flipCard function */

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let firstCard, secondCard;

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
        disableCards();
        return;
    }
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

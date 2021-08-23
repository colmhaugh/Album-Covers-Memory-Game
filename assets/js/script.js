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
/* click a card, if the card wasn't selected already then it will become the first card flipped */
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

function shuffleCards() {
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 12);
        card.style.order = randomOrder;
    });
}

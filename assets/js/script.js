/*  make card flipCard when clicked
 create a list of the memory cards and store it in cards.
 for each of the cards in the list we call the flipCard function.
 adding an event listner to listen out for a click on the card
 When  a card is clicked, it will call flipCard function */

const cards = document.querySelectorAll(".memory-card");

function flipCard(){
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

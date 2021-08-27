/*  make card flipCard when clicked
 create a list of the memory cards and store it in cards.
 for each of the cards in the list we call the flipCard function.
 adding an event listner to listen out for a click on the card
 When  a card is clicked, it will call flipCard function */

const cards = document.querySelectorAll(".memory-card");
var noOfCards = 12;
var noIncorrectCards = 0;
let hasFlippedCard = false;
let firstCard, secondCard;

// from freecodecamp to lock board to stop user from clicking more than 2 cards
let lockBoard = false;

// Get the modal
var modal = document.getElementById("myModal");
var endModal = document.getElementById("endModal");

//Using classList.add to add flip class to memory card that was selected and removing it if it is present

function flipCard(){
    
if(lockBoard) return;

    // add flip to card thats selected;

    this.classList.add('flip');
        // click a card, if it is the first card turned it will become the first card flipped
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
        /* when the first card is flipped and the player selects the another card, 
        it will become secondCard */        
    secondCard = this;

        // has flipped will then go back to false
    hasFlippedCard = false;

    // player has now selected two cards.  Call a function to check if they are matched
    checkForMatch();
}

function checkForMatch(){
    // Check if the dataset-band from the memory card on firstCard and secondCard match
    if (firstCard.dataset.band === secondCard.dataset.band){      

    // if the cards match then call the function that will leave the cards faced up and remove the click option
        disableCards();

        // Play clip from album
        playSound();
        noOfCards = noOfCards - 2;     
        if (noOfCards === 0 && noIncorrectCards <= 3 ){
            document.getElementById("endGameModalParagraph").innerHTML = "CONGRATLATIONS!  You have a great memory.  Press Reset button to play again";
            endGame();}            

            else if (noOfCards == 0 && noIncorrectCards <= 7 ){
            document.getElementById("endGameModalParagraph").innerHTML = "Well Done, You have a fine memory. Press Reset button to see if you can do better";
            endGame();}
        
            else if (noOfCards == 0 && noIncorrectCards < 15 ){
            document.getElementById("endGameModalParagraph").innerHTML = "Your memory is not great.  Don't forget to press Reset button to try again";
            endGame();}      
                  
        return;
     }   
    // if the cards don't match then call the function that will flip the cards back over again
    unflipCards();
    }

/* Function called when the cards matched.  
It removed the event listener so the cards can't be selected again */
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
}

/* Function called when the cards dont match.  We remove the flip class that was added when they were selected.  
Cards flip back after half a second */
function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 500);
   
    noIncorrectCards++;

}

// istens out for user to click a card and then calls flipCard function
cards.forEach(card => card.addEventListener('click', flipCard));


// shuffle cards to create a rand list of cards, Start button calls this function and the game begins */
function shuffleCards() {    
    noOfCards = 12;
    noIncorrectCards = 0;
    cards.forEach(card => {
        let randomOrder = Math.floor(Math.random() * 12);
        card.style.order = randomOrder;
    });

}
 // Function to play sound when cards are matched
function playSound(){
    var x = document.getElementById("myAudio");   
    x.play(); 
} 

function unflipAllCards(){
    cards.forEach(card => {card.classList.remove('flip'); });    
    hasFlippedCard = false;
}

function reset(){
    cards.forEach(card => card.addEventListener('click', flipCard));
    noOfCards = 12;
    noIncorrectCards = 0;
    shuffleCards();
    unflipAllCards();
    
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var endSpan = document.getElementsByClassName("endClose")[0];

// When the page loads, open the modal
function userAlert() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on <span> (x), close the modal
endSpan.onclick = function() {
    endModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == endModal) {
        endModal.style.display = "none";
    }
  } 

function endGame() {
    endModal.style.display = "block";
  }

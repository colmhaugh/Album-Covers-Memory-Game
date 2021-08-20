const cards = document.querySelectorAll(".memory-card");

function flipCard(){
    console.log("Test Click");
}

cards.forEach(flipCard)
{
    addEventListener('click', flipCard);
}
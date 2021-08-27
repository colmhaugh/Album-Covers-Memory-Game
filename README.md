# Album Covers Memory Game

 [View the live project here](https://colmhaugh.github.io/Album-Covers-Memory-Game/)

Album covers memory game is a fun and simple memory card flipping game.  The object of the game is to filp over the cards and match the classic rock album covers.

![Responsice Mockup](https://github.com/colmhaugh/Album-Covers-Memory-Game/blob/main/assets/images/AmIResponsive.JPG)

## Features 

### Existing Features

- __Instructions Modal__

  - Appears when the page load.  The Alert() style was boring so I created a modal with the instructions on how to play the game.
  - The Modal will dissapear when the user clicks the x button or when the click outside the window. 

![Instructions Modal](https://github.com/colmhaugh/Album-Covers-Memory-Game/blob/main/assets/images/InstructionsModal.JPG)

- __Memory Game__

  - In this section there are 12 divs.  Each div has 2 images to represent a card.  There are an image of a music note at the front of the card and at the back of the card there is an image of the album cover.  I have used data- value to link the pairs of cards.
  - The player selects a card, then tries to select the matching pair.  If the user is corret the cards will stay faced up.  If they don't match, the cards will flip cack over.  
  - The player selects a card, then tries to select the matching pair.  If the user is corret the cards will stay faced up.  If they don't match, the cards will flip cack over.

![Memory Game Cards down](https://github.com/colmhaugh/Album-Covers-Memory-Game/blob/main/assets/images/MemoryGameCards.JPG)
![Memory Game Cards down](https://github.com/colmhaugh/Album-Covers-Memory-Game/blob/main/assets/images/MemoryGameCardsAlbums.JPG)

- __End Game Modal__

  - When the game is over, the End Game Modal appears with a message for the player.  The player can get 3 different messages depending on how many guesses they have used.

  ![End Modal1](https://github.com/colmhaugh/Album-Covers-Memory-Game/blob/main/assets/images/EndGameModal1.JPG)
   ![End Modal1](https://github.com/colmhaugh/Album-Covers-Memory-Game/blob/main/assets/images/EndGameModal2.JPG)
    ![End Modal1](https://github.com/colmhaugh/Album-Covers-Memory-Game/blob/main/assets/images/EndGameModal3.JPG)

### Features Left to Implement

- Additional levels can be added to the game.
- More music sounds through out the game.

## Technologies Used 

### Languages Used

  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS](https://en.wikipedia.org/wiki/CSS)
  - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Libraries & Programs Used

  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
  - GitHub is used to store the projects code after being pushed from Git.


## Testing 

I uesed the devices in devtools to check how it would look on samller devices after every push as part of my regression testing.
I tested my mobile device, Samsung 20 ultra and on iPad.
Most of the early testing was done using Google Developent tools.
Issues were fixed as they appeared and i put detailed commit comments when they were fixed.

# Issues fixed

- I fixed most issues as I found them.  I used the commit comment to note when the issues were fixed.
- I got error 404 message when I tried to deploy the page.  I had to add a favicon and relevant text to the head for this to work.
- Image for Guns N Roses card were not displaying when deployed.  I removed the / from the begining of the source and it worked.
- Cards were flickering so I removed onhoover.
- Changed the Alert for the isntructions and Game over to a Modal for a better user experience.
- Copied the text to word doc and preformed a spell check to catch any errors.

# Further testing
- The Website was tested on multiple browsers including Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, Samsung S20 Ultra, iPhone 11 & iPad.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

- JavaScript
  - Noerrors were found when passing through the official Jshint validator
    - The following metrics were returned:
      - There are 19 functions in this file.
      - Function with the largest signature takes 1 arguments, while the median is 0.
      - Largest function has 13 statements in it, while the median is 2.
      - The most complex function has a cyclomatic complexity value of 8 while the median is 1.

### Unfixed Bugs

To be added!

## Deployment

  - The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - There is a table on the left of the screen, scroll down to the 2nd last option where you can select "Pages" option.
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

## Making a Local Clone

  - The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - On the top of the page there is a green button "Code".
  - Press the button and To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
  - Open Git Bash
  - Change the current working directory to the location where you want the cloned directory to be made.
  - Type git clone, and then paste the URL you copied in Step 3.
  - Press Enter. Your local clone will be created.

## Credits 

- Advice and guidance from my mentor Precious Ijege.
- Great leadership and guidance from Kasia Bogucka.
- Great links and advice from colleagues in my course. 
- Game is based on [FreeCodeCame] (https://www.freecodecamp.org/news/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae/)
- Additional flexbox information from [css-tricks] (https://www.css-tricks.com)
- Refresh html and css from Code Institute lessons and from [w3school] (https://www.w3schools.com/)
- Modal from [w3school] (https://www.w3schools.com/)
- Different valuse for the text for end game modal from [w3school] (https://www.w3schools.com/)
- Converted note image to favicon using [favicon] (https://favicon.io/favicon-converter/)


### Content 

- Modal text for insturcions and end game were created by Colm Haugh.


### Media

- Photos for album were from their Wiki page.


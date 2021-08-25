# Album Covers Memory Game

 [View the live project here](https://colmhaugh.github.io/Album-Covers-Memory-Game/)

Welcome to Spanish Point is a site that will give visitors information about the Spanish Point area.  It is structured so that the user can find information on where they can eat and drink and aslo what activities are available.  Since Covid-19 there has been an increase in visitors to the area so with this site it will help them with their basic needs. The site will be targeted toward these additional visitors who intend to visit the area.  

![Responsice Mockup](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/AmIResponsive.JPG)

## Features 

### Existing Features

- __Navigation Bar__

  - Featured on all three pages, the full responsive navigation bar includes links to the Logo, Home page, Food and Drink page and Activities page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/navbar.JPG)

- __The home page image__

  - The Home page includes a photograph of Spanish Point beach.  It has a text overlay that zooms in with a "Welcome to Spanish Point" text to welcome the user to the site. This text is disabled on smaller devices.

![Home page hero image](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/homepageimage.JPG)

- __About Text Section__

  - The about section will give the visitor information about Spanish Point, including where it is located and information about the history of the area. 
  - The user will get an overview of the area which will encourage them to visit the area.

![Google Maps](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/about-text.JPG)

- __Google Map section__

  - This section will allow the user to see exactly where Spanish Point is located. 

![Meetup Times](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/google-maps.JPG)

- __The Footer__ 

  - The footer section includes links to the relevant social media sites for Spanish Point. The links will open to a new tab to allow easy navigation for the user. 
  - The footer includes an icon to indicate the current weather of the area,  this icon is made a bit bigger thatn the other icons so that it stands out.  The icon is a link to a weather forecast site.

![Footer](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/footer.JPG)

- __Food and Drink__

  - The Food and Drink page will provide the user with information on where the hotels with restaurants and bars are located. 
  - This section is valuable to the user as it will provide them with information of the opening times of each reatuarant, give them links to the Hotels home page where they can access the Menu and contact information. 
  - This section has information on 3 businesses.  Each section has an image, this image has an on hoover zoom that indicates that it is interactive, and when the image is pressed it will open the business home page in a different page.
  - Each section had a table with information of opening hours and a link to a menu and link to their contact information.
  

![FoodandDrink](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/food-and-drink-image.JPG)

![Hotels](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/hotels.JPG)

- On smaller devices the hotels will stack on top of each other.

![Hotels](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/hotelsmall.JPG)

- __Activities__

  - The Activities page will provide the user with information what activites are available to them.  There are 3 activites which the user can get information on.  The activities are divited into 3 sections.  Each section has a button does a function for the activity. The button for the golf and the surfing section are pointing to google as a place holder.   
  - The button for Walking will open up a walking map with differnt routes in the area.
  - The image for the golf and walking is fixed so that the text moves to give the impression of movement.
  - Background color remained aqua to reflect the blue of the sky and water while doing the activites.
  - Button color is green to reflect the green of the golf course and of the walking trails.

![Activites](https://github.com/colmhaugh/spanish-point/blob/master/assets/images/activites.JPG)



### Features Left to Implement

- In the footer, the weather icon is in place, in the furure this would be linked to a site and would update to the correct up to date weather.
- The links for the coast lodge is not secure so they are currently pointing to google.
- Buttons are currently linked to google as a placeholder, these would be updated so the user can book a tee time and book surfing lessons.

## Technologies Used 

### Languages Used

  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS](https://en.wikipedia.org/wiki/CSS)

### Libraries & Programs Used

  - Hover.css was used on the nav bar list items, the contact and menu links in the food and drinks page.  It was use in the food and drinks page over the images of the hotels to make them zoom to indicate that they are interactive.
  - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
  - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
  - GitHub is used to store the projects code after being pushed from Git.


## Testing 

Testing was done early and often.  I uesed the devices in devtools to check how it would look on samller devices after every push as part of my regression testing.
I published early so I could test on mobile phone every eveining after a push.
I tested my mobile device, Samsung 20 ultra and on iPad.
Most of the early testing was done using Google Developent tools.
Issues were fixed as they appeared.

# Issues fixed

- I had in issue where the images for the hotels in the food and drink page.  The image was showing up while I was testing but not when I was testing on the live site.  I used google develpoer tools to inspect and discovered that i had added an extra dot so it was looking for the image in the wrong location.  It was img src="../assets/images/  and once i changed it to img src="./assets/images/ it worked.
- While testing on smaller devices, the ""Welcome to Spanish Point" overlay text didnt look good on smaller devices.  I made the hero-text display to none so it wouldnt appear on phones.  
- I also made the hero-text higher on tablets so it would look better.
- There was not enough room on small devices for the 3 hotels to appear in a row so i put them in a column.
- Some images were loading slowly so i lowered the quality of the image.
- Copied the text to word doc and preformed a spell check to catch any errors.

# Further testing
- The Website was tested on multiple browsers including Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Laptop, Samsung S20 Ultra, iPhone 11 & iPad.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/#textarea)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

### Unfixed Bugs

The links for The Coast Lodge were not secure so have the links pointing to google.

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
- Header and Footer was modified from Love Running Project.
- Margin, Button and any other basic review from Code Institute lessons and from [w3school] (https://www.w3schools.com/)
- Color theme from [coolors] (https://www.coolors.co/)
- Remove h1 from the header for smaller devices [css-tricks] (https://www.css-tricks.com)
- Food and drink display on smaller devices from [css-tricks] (https://www.css-tricks.com) and Love Running project.

### Content 

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)
- Icon for the weather in the Footer was from [onlinewebponts] (https://www.onlinewebfonts.com/icon/154)


### Media

- Photos for album were from their Wiki page.
- Photos Food and Drink hero image is from [vecteezy](https://www.vecteezy.com/vector-art/)


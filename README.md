# __Portfolio Project 2 - JaveScript__
## __INSERT NAME OF GAME HERE__


### __Demo__

The live site can be viewed here - 

Github repository can be viewed here - 


## Table of Contents
* [User Experience](#user-experience)
* [Technologies](#technologies)
* [Testing](#testing)
* [Deployment](#deployement)
* [Credits](#credits)

## __User Experience__

### __Strategy__
The aim of the website is to display an interactive golf themed hangman game.
Reasons for the site:
* Enjoyment
* Quiz

#### __User Stories__
* As a user I want to be able to:

    1. Easily understand the main purpose of the website.
    2. Easily navigate throughout the website to find and interact with the content.
    3. Access the site from different devices
    4. Play 3 rounds of the hangman style game.
    5. See a running points counter.
    6. See a time of the remaining time left to complete the three rounds.
    7. Get feedback on whether answers were correct or not.
    8. On successful completion of the game, obtain a high score and feedback message.
    9. Restart/reset the game and to enjoy playing the game multiple times.

### __Scope__
Functionally the site must be:
* Easy to navigate
* Well presented and display a funlly functioning golf themed hangman-style game

Content should include the following:
* Provide the user with the rules of the game.
* Provide interactive fuctionailty to play the game.
* Link to the developers GitHub account.

### __Structure__
Based on the content required in the scope of this projec, this website will consist of only 1 page. The home page will have the game title display clearly the rules of the game with a start button. On click of the start button the game will load and have interactive functionailty. The game will be contained in a centralised container, with a golf themed background image.

### __Skelton (Wireframes)__

Single wireframe image. The website will be responsive fitting all elements inside the width of the user screen.
![Home Page Wireframe](/wireframe-golf-game.png)
<br>
Additon to the wireframe includes:
* Points counter.
* Timer.
* Hint and restart buttons that will appear after gane loading.

### __Surface (including Features)__

#### __Typography__
*  Google fonts was used for the typography for this website
    * Fira Sans - used for all heading 1 elements
    * Noto Sans - used for all other headings and labels
    * Trykker - used for all other body elements
    * Sans serif - used as back-up font
 
#### __Features__
* Loading page
    * Header for the page to include the the name of the game. 
    * Div container displaying the rules of the game and a "new game" start button.

* New game button
    * On click of this button, the following will take place:
        1. The lives counter will display three lives (each a golf ball on a tee image).
        2. The points counter will be present displaying "0" at the start of the game.
        3. A keyboard with 26 individual buttons, container letters A-Z, will appear. These buttons will have clickable functionality.
        4. A random question and it's associated properties will be generated. 
        5. The question, directing the user to the theme of the hangman will appear.
        6. The answer will appear initialling a blank underscores, each underscore representing a letter.

* Game screen
    * The user can interact with the game by clicking on infividual letters. Doing so will check if the chose letter matches a letter in the randomly generated hangman
    * After pressing a button, the button will be disabled preventing duplication.
    * If the letter is correct, then it will replace the underscore with the chosen letter
    * If the letter is not correct, the user will lose a life and will be refelecting the lives counter

* Game over
    * If the user selects three incorrect letters before the word is fully revealed a message will appear stating the end of the game. 
    * The full word will not be revealed to allow for replayability
    * A "restart game" button will be present for the user to click and restart the game. On click the page will be reloaded, subsequantly restarting the game.

* Level complete
    * If the user selects all the correct letters without losing all their lives. A winning message will appear.
    * The points counter will be updated to reflect the win, with a total on 10 points on offer. 
    * Each hint (see below) will reduce the total points available.
    * Each live lost will also reduce the total points available.
    * A "next level" button will appear and when click will generate another random question

* Completion of game
    * If the user successfully completes three levels, a congratulations message will appear.
    * The total points will be included in the message
    * A button will also appear to restart the game allowing the user to replay it with the aim of either beating their previous score or attempt other randomly generated questions.

* Hint button
    * For each questions, there will be two hints on offer.
    * A button will be present for the user to reveal these hints providing support to the user to answer the hangman correctly
    * Each hint will dimish the score by 2 points.

* Future
    * Increased question bank to imporve replayability
        * There are currently 9 questions. This can be increased substantionally to allow further replayability.
    * Allow user to filter the question choice
        * Currently the questions are all contined in a single array. Future changes can group these into categories, allowing the user to filter the questions asked.
    * Record user's high scores
        * There is currently no function for the user to enter in any personal details, such as a username. Additon of this will further enhance user replayability.
        * A high score storing function will challenge users to beat their previous attempts.
    * Allow user to chose the size of the questions for each game (currently set at 3 levels). This will further increase replayability.
    * Introducee a timer function to add extra pressure to answer all questions correctly.

## __Technologies__

### __Languages__

* HTML
* CSS
* JavaScript

### __Frameworks, programs and libraries__

* [Figma](https://www.figma.com/) - Used to create wireframes for this website.
* [Stack Overflow](https://stackoverflow.com/) - Used to troubleshoot HTML, CSS and JavaeScript coding queries.
* [Google Fonts](https://fonts.google.com/) - Used to apply fonts to this website.
* [Fontjoy](https://fontjoy.com/) - Used to create font pairings.
* [Am I Responsive?](https://ui.dev/amiresponsive) - Used to create an image of website on various screen sizes.

## __Testing__

### __Validator testing__

* __[W3C Markup Validation Service](https://validator.w3.org/)__

* __[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)__

* __[JavaScript Testing]()__

* __Lighthouse testing using [PageSpeed Insights](https://pagespeed.web.dev/)__
    - Images can be converted to next-gen formats to improve performance on mobile devices
    - [Results](https://pagespeed.web.dev/analysis/https-cmed01-github-io-Portfolio-Milestone-1/64l0tgdbae?form_factor=mobile)


### __Browser Compatability__
* Browser testing was completed on the following browsers using [SauceLabs](https://saucelabs.com/)
    - Chrome Version 112.0.5615.138 (Official Build) (64-bit)
    - Firefox Version 111.0 (64-bit) 
    - Edge Version 112.0.1722.34 (Official Build) (64-bit)
    - Safari Version 16.1 (18614.2.9.1.12) (accessed via macOS Ventura 13) 

### __Test Cases and Results__


## __Deployement__

### __How this site was deployed__

1. In the GitHub repository, navigate to the Settings tab, then choose Pages from the left hand menu

2. From the source section drop-down menu, select the Master Branch

3. Page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment

4. Any changes pushed to the master branch will automatically start a workflow to build and deploy the page with the update code.

The link to the live website can be found here - 

### __How to clone the repository__

1. Go to the 
 repository on GitHub.

2. Click the "Code" button to the right of the screen, click HTTPs and copy the link there

3. Open a GitBash terminal 

4. Change the working directory to the location where you want the clone directory.

5. On the command line, type "git clone" then paste in the copied url (https://github.com/CMed01/Portfolio-Milestone-1.git) and press the Enter key to begin the clone process

## __Credits__

### __Content__

* All content was written by the developer

### __Code__

* Code on how to add a Favicon to the website was based on example code from [W3Schools HTML Favicon](https://www.w3schools.com/html/html_favicon.asp#:~:text=To%20add%20a%20favicon%20to,is%20%22favicon.ico%22.)


### __Media__


### __Acknowledegements__

I would like to express my gratitude to my mentor Brian Macharia, for his guidance, support and encouragement throughout my second project.
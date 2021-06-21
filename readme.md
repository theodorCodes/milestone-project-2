*Not the traditional memory game. It helps to find out if we have the capability to memorise images in detail. Instead of flipping cards to find pairs, you will be presented with a preview of the available cards before you start the traditional memory game. It aims to answer the question of whether we have an eidetic or photographic memory.*

![ms2-ui-2-mockup](/assets/images/ms2-ui-2-mockup.png)

An **interactive memory game** with a twist as part of the Code Institute's milestone project 2. You can visit the page and play the game right [here!](https://theodorcodes.github.io/milestone-project-2/) 



---



### Table of Contents

-   [Project](#project)
    -   [Project Introduction](#project-introduction)
    -   [User Story and Goals](#user-story-and-goals)
    -   [Developer Story and Goals](#developer-story-and-goals)
-   [Features](#features)
    -   [Planned Features](#planned-features)
    -   [Features Implemented](#features-implemented)
    -   [Features Left to Implement](#features-left-to-implement)
-   [Design](#design)
    -   [Programming Approach](#programming-approach)
    -   [UX Design Choices](#ux-design-choices)
    -   [Wireframes and Layout](#wireframes-and-layout)
-   [Technologies Used](#technologies-used)
-   [Testing](#testing)
    -   [HTML on W3C Validator](#html-on-w3c-validator)
    -   [CSS on W3C Jigsaw Validator](#css-on-w3c-jigsaw-validator)
    -   [JavaScript and Chrome](#javascript-and-chrome)
    -   [JSHint and JavaScript](#jshint-and-javascript)
    -   [Game play issues](#game-play-issues)
    -   [Performance Test with Lighthouse](#performance-test-with-lighthouse)
-   [Deployment](#deployment)
-   [Credits](#credits)



## Project



### Project Introduction

As part of a student project at the Code Institute, I chose to write a memory game to apply and use vanilla JavaScript with HTML and CSS without any frameworks. In this grid-based memory game, the user has to flip through a group of cards to find pairs that match up with each other. When two cards are identical and match, the user gains 1 point.



### User Story and Goals

As a user, I expect a casual game to be **easy to understand** without any instructions. It has to be **entertaining** or offer at least **some challenges to capture my mind**. Once I'm hooked up with the game, it has to offer some **levels to keep me playing**. The layout and the design are somewhat important as they put me into the mindset or **mood that I'm playing a game**.



### Developer Story and Goals

**Hands-on experience** of applying and building something with JavaScript after going through a long process of learning the ins and outs of this language. A game that looks and works flawlessly. **Implementation of features**, **running tests** and gaining **valuable experience** and problem-solving **practice**.

[back to top](#table-of-contents)



## Features



At the beginning of this project, I thought about a traditional memory game where you flip the cards one by one, and collect the cards once you have found a matching pair. While doing a little bit of research about why it is challenging to play this game, I found out that we actually do not have an eidetic or photographic memory (please see the link to the [memory game](https://theodorcodes.github.io/milestone-project-2/)). Therefore, the idea of creating "a game to train your memory" has changed into a game to demonstrate how hard it actually is to recall an image in detail.



### Planned Features

The traditional memory game is relatively simple; all you have to do is **flip the cards** and **find matching pairs**. To add some features, this game consists of **4 levels** and you can get to the next level once you have found all the pairs from the current level. As the level increases, **you are challenged to find more cards**. 

As this exercise is about interactivity, the game is designed to guide the user throughout the game. When the website launches, a modal view is presented to invite the user to start the game. During game play, the top header **provides useful information to the user**, such as reminding the user to "Choose another card" when the user accidentally clicks the same card twice, or informing the user about a match if a pair of cards is found. At the end of each level, a modal view appears to **inform the user of the game stats** and to **direct the user to the next level**.

[back to top](#table-of-contents)



### Features Implemented

Starting at the top of the game layout, the header contains a **game assistant** that enhances the interactivity of the game play and notifies the user of moves made, such as "You found a match" or "Try again" if the cards do not match. Right under the game assistant is the **game stats** area where the user can see the **current level**, **moves made** and **score,** which updates instantly once the user has found a pair of cards. 

The main area features **playing cards**, which will be shuffled or **randomised** for each game. And at each additional level, the **playing cards increase in size**. The footer area has a **reset button** which acts as a rescue button if a user might want to restart the game without finishing a level. 

Another important feature that has been implemented is the two modal views. The first modal view, "**the modal game assistant**", **introduces the user to the game** at the beginning and pops up after the end of each level to **display the game's stats** and to **lead the user to the next level**. The second modal view, "**the game preview**", is where the cards are presented to the user in the same order as they are going to be played. The user gets enough time to memorise the cards, their position and colors and can choose when to start the game. 

Although not necessary for the game, at the end of the game, the user will be invited to click a link to learn more about what this game is all about or to play it again.

[back to top](#table-of-contents)



### Features Left to Implement

The design of the current cards has letters as the only motive, and it would be interesting to test if the level of difficulty of memory will increase or decrease depending on motives such as **numbers**, **geometrical shapes** or other **special characters**. As this is a game, the level of entertainment would improve by adding **more animations** in the right places.

[back to top](#table-of-contents)



## Design



### Programming Approach

```
# General approach

card creation (playing cards)
  `-> use cards to create game layout
            `-> each card has a click function
                                  `-> clicked cards gets 
                                      - registered
                                      - rendered
                                      - evaluated


# Main functions

loadGame()
    `-> createGameLayout()
            `-> selectedCard()
                    `-> evaluateCards()
                                        
```

[back to top](#table-of-contents)





### UX Design Choices

The navigation throughout the game is designed to be intuitive. To keep the design simple, the base colors are neutral and low-profile, while the playing cards are designed to spark entertainment and keep the eye busy and therefore focused on the cards.

[back to top](#table-of-contents)



### Wireframes and Layout

The game layout is divided into three sections: a header, the main gaming area with a deck of cards and a footer section, which is reserved for additional game-related buttons, such as settings or other information that might be important to the game. 

![ms2-wireframe-1](/assets/images/ms2-wireframe-1.png)

The first level starts with 8 hidden cards and the user has to flip each card to find letter pairs. Once all the cards have been discovered, the user can move on to the next level. Each additional level will add another row of cards. This game offers 4 levels and can display up to 20 cards in this layout with the given card size. 

![ms2-layout-1](/assets/images/ms2-layout-1.png)

Each card has a default size of 100 * 100px, but its implementation is responsive. In CSS, the card width is `calc(94% / 4)` so that it looks the same on each device, ranging from 320px up to any desktop width where the total width of the game area is limited. To create the contrast between the background and the playing cards, I chose to use earthy and calm colors for the background, while the playing cards are a combination of monochromatic color schemes of pink and purple.

![ms2-ui-1](/assets/images/ms2-ui-1.png)

[back to top](#table-of-contents)



## Technologies Used



This project is written in **HTML**, **CSS** and **JavaScript**. All of the custom code is written with the **Visual Studio Code** editor on a personal **Mac computer**. This project uses **Git** for version control and is stored as a public repository on **GitHub**. **Sketch** is used to create the gaming cards as well as the images in this README file.

[back to top](#table-of-contents)



## Testing



### HTML on W3C Validator

The **HTML** code has been validated by direct input in the [W3C validator](https://validator.w3.org/) and resulted in the following warning:

Warning 1: **The** `type` **attribute is unnecessary for JavaScript resources.**

To fix this issue I have simply deleted the `type` attribute: 

From: `<script src="assets/js/app.js" type="text/javascript"></script>`

To: `<script src="assets/js/app.js"></script>`



Warning 2: **Empty heading.**

To fix this issue I have changed the `h3` tag: 

From: `<h3><span id="game-assistant"></span></h3>`

To: `<p><span id="game-assistant"></span></p>`

The two issues have been resolved and the response was positive: **Document checking completed. No errors or warnings to show.**

[back to top](#table-of-contents)



### CSS on W3C Jigsaw Validator

The **CSS** code has been validated by direct input in the [W3C Jigsaw validator](https://jigsaw.w3.org/css-validator/) and the respond of the validator has been positive:
W3C CSS Validator results for TextArea (CSS level 3 + SVG): **Congratulations! No Error Found.**

[back to top](#table-of-contents)



### JavaScript and Chrome

To debug JavaScript, the Chrome browser has been used extensively. `console.log()` and `console.table()` were my favorite tools to see if outputs were logged as expected. Here are the bugs I encountered:

Console warning 1:

```bash
# Bug alert:
app.js:34 Uncaught TypeError: Cannot read property 'appendChild' of null
    at createCards (app.js:34)
    at HTMLDocument.<anonymous> (app.js:42)

# Bug issue:
const board = document.querySelector("board");  # missing the dot in front of "board" 

# Bug fixed:
const board = document.querySelector(".board"); # fixed with ".board"

```

Console warning 2:

```bash
# Bug alert:
app.js:111 Uncaught TypeError: this.getAttribute is not a function
    at selectedCard (app.js:111)
    at HTMLDocument.<anonymous> (app.js:120)

# Bug issue:
app.js:111: var cardId = this.getAttribute('data-id'); # this was raised as an issue
app.js:120: selectedCard(); # this was the problem as the function was was not finished, but I have already logged the function with console.log

# Bug fixed:
# commenting my console.log fixed the bug!

```

[back to top](#table-of-contents)



### JSHint and JavaScript

The **JavaScript** code has been validated by direct input on [JSHint](https://jshint.com/) and resulted in the following message:

**Metrics:** There are <u>10</u> functions in this file. Function with the largest signature take <u>0</u> arguments, while the median is <u>0</u>. Largest function has <u>36</u> statements in it, while the median is <u>12.5</u>. The most complex function has a cyclomatic complexity value of <u>6</u> while the median is <u>2</u>.

[back to top](#table-of-contents)



### Game play issues

To ensure a smooth game-playing experience, I had to iron out some unexpected behavior that was not a coding bug, but rather a game-playing bug:

-   **Issue 1:** Each click of a card will register the ID in the `cardFlippedId` array. When clicking fast enough through multiple cards, the user can select more than 2 cards, which is undesirable, as only 2 cards are required to check if they match.
    -   **Solution:** To solve this issue the last item will be removed using the .pop() method when the array exceeds 2 items.
-   **Issue 2:** Clicking on the same card multiple times was also an issue, resulting in unfavorable game results.
    -   **Solution:** To solve this issue, I removed the event listener on the already selected cards.

[back to top](#table-of-contents)



### Performance Test with Lighthouse

**Google Chrome's Developer Tools** are used extensively for debugging as well as the built-in **Lighthouse** project to test the performance of this application. The responsive design has been tested using **Google Chrome's responsive feature** that emulates the screen sizes of various mobile devices. Further testing has been conducted through available devices such as MacBook Pro 13", iPad 12".

When the Lighthouse generated a report for the **desktop** view, it produced the following results in the following categories:

-   Performance: 100
-   Accessibility: 100
-   Best Practices: 100
-   SEO: 89 - Explanation: Document does not have a meta description

When the Lighthouse generated a report for the **mobile** view, it produced the following results in the following categories:

-   Performance: 99
-   Accessibility: 100
-   Best Practices: 100
-   SEO: 91 - Explanation: Document does not have a meta description

[back to top](#table-of-contents)



## Deployment

The repository of this project is stored on **GitHub** and the site is deployed as a **GitHub page**. Please visit the project website by clicking [here!](https://theodorcodes.github.io/milestone-project-2/) As this application has no requirements other than the files itself and your browser, you could easily download the files and open the index.html file in your browser and it should work.

[back to top](#table-of-contents)



## Credits

The [Code Institute](https://codeinstitute.net/) initiated this project to teach and mentor students on their path to becoming software developers.

A special thanks goes to [Ania Kubów](https://dev.to/ania_kubow/build-a-memory-game-in-vanilla-javascript-53l4), who demonstrates how to make a simple memory game using pure JavaScript for beginners. Her video on YouTube was very helpful in grasping the idea of which logic you can apply to create a memory game. And thanks to the Stack Overflow community in general, where I found a lot of answers to questions I had while working on this project.

[back to top](#table-of-contents)

... this project is under development


# Memory Game

This grid based memory game where the player as to flip through a group of cards to find pairs that match with each other. When two cards are identical and match each other then the player gains 1 point.



# Overview

- Prepare available playing cards
- Prepare deck of cards UI for gameplay in the browser
- Select cards function
- Evaluate selected cards function
- Variables to store cards and scores


## Methods used
.push()
.querySelector()
.setAttribute()
.getAttribute()
.createElement()
.appendChild()
.Math.random()
.sort()
For Loops


# Bugs found and fixed

Bug 1

```
Bug alert:
app.js:34 Uncaught TypeError: Cannot read property 'appendChild' of null
    at createCards (app.js:34)
    at HTMLDocument.<anonymous> (app.js:42)

Bug issue:
const board = document.querySelector("board");  # missing the dot in front of "board" 

Bug fixed:
const board = document.querySelector(".board"); # fixed with ".board"

```

Bug 2

```
Bug alert:
app.js:111 Uncaught TypeError: this.getAttribute is not a function
    at selectedCard (app.js:111)
    at HTMLDocument.<anonymous> (app.js:120)

Bug issue:
app.js:111: var cardId = this.getAttribute('data-id'); # this was raised as an issue
app.js:120: selectedCard(); # this was the problem as the function was was not finished, but I have already logged the function with console.log

Bug fixed:
// selectedCard(); # commenting the console.log fixed the bug

```
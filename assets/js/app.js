/*
Memory Game - Comments Structure
a Marks: Bare minimum code to get it work and playable
b Marks: Fixes to make the game more stable and prevent obvious bugs
c Marks: Advanced levels
d Marks: Styling and animation
t Marks:
*/

// t: Test if index.html loads app.js file
console.log("t1: Link from app.js to index.html established: Ok");

// a1)
// Load this "Memory Game" when DOM content is loaded
document.addEventListener('DOMContentLoaded', function(event) {
  
  // t: Test if event listener works to check if DOM is loaded
  console.log("t2: The Dom has loaded: Ok");

  // a2)
  // Create array with objects of cards
  const playingCards = [

    // with image name and path for each img
    // Each card is repeated to create pairs
    {name: "card1", img: "assets/images/card1.png"},
    {name: "card1", img: "assets/images/card1.png"},
    {name: "card2", img: "assets/images/card2.png"},
    {name: "card2", img: "assets/images/card2.png"},
    {name: "card3", img: "assets/images/card3.png"},
    {name: "card3", img: "assets/images/card3.png"},
    {name: "card4", img: "assets/images/card4.png"},
    {name: "card4", img: "assets/images/card4.png"},
    {name: "card5", img: "assets/images/card5.png"},
    {name: "card5", img: "assets/images/card5.png"},
    {name: "card6", img: "assets/images/card6.png"},
    {name: "card6", img: "assets/images/card6.png"}

  ];

  // t: Test if array prints to console
  console.log("t3: Test if array prints to console: " + playingCards[0] + " Ok");

  // a3.1) Get board element from index.html and store as board
  const board = document.querySelector(".board");

  // a3.2) Get result element from index.html and set as displayResult
  const displayResult = document.querySelector("#result");

  // a4)
  // Creating deck of cards
  // Create board content by looping through playingCards
  // and execute this at the end, see step a4.1 at the end
  function createDeckOfCards() {

    // loop through each card in playingCards
    for (let i = 0; i < playingCards.length; i++) {

      // Create an HTML element of img for
      // each card and store it in (var) card
      var card = document.createElement("img");

      // Set an attribute for each img of
      // src="assets/images/blank.png" which will be
      // the placeholder card that the player has to flip
      card.setAttribute("src", "assets/images/blank.png");

      // And set another attribute for each img of data-id
      // with the value of the current loop (i) number
      card.setAttribute("data-id", i);

      // Adding an event listener to check for clicks on the card
      // which call the function 'selectedCard', see step a5
      // card.addEventListener("click", selectedCard);

      // Fix: User can double click the same image which counts as a match

      // And append the variable 'card'
      // to the HTML element 'board'
      board.appendChild(card);

      // By the end of this function we should have a clickable
      // tag element like this inside the board element
      // <img src="assets/images/blank.png" data-id="0">

    }

    // t: Test if this function repsonses to console
    console.log("t4: Testing if this function prints to console: Ok");

  }

  // a4.1)
  createDeckOfCards();

});
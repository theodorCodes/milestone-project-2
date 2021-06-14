/*
Memory Game - Comments Structure
A) Bare minimum code to get a playable result
B) Fixes to make the game more stable and prevent obvious bugs
C) More features and additional levels
D) Styling and animation
t) testing stuff
*/

// t: Test if index.html loads app.js file
console.log("t1: Link from app.js to index.html established: Ok");

// A1)
// Load this "Memory Game" when DOM content is loaded
document.addEventListener('DOMContentLoaded', function(event) {

  // t: test if event listener works to check if DOM is loaded
  console.log("t2: The Dom has loaded: Ok");



  // A2) PLAYING CARDS
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

  // t: test if array prints to console
  console.log("t3: Test if array prints to console: " + playingCards[0] + " Ok");

  // A7) Randomize cards
  playingCards.sort(() => 0.5 - Math.random());



  // A) VARIABLES
  const board = document.querySelector(".board"); // A3.1) Get board element
  const displayResult = document.querySelector("#result"); // A3.2) Get result element
  const displayAssistant = document.querySelector("#display-assistant"); // A8) Get display-assistant

  var cardsFlipped = []; // A5.2) Creating an empty array
  var cardsFlippedId = []; // A5.3) Create empty array
  var matchingCards = []; // A6.1) Create empty array

  // C) VARIABLES MODAL VIEW
  var msg = document.querySelector("#msg");
  var level = document.querySelector("#level");
  var score = document.querySelector("#score");
  const moves = document.querySelector("#moves");
  const movesModal = document.querySelector("#movesModal");
  var optionReset = document.querySelector("#optionReset");
  var optionNextLevel = document.querySelector("#optionNextLevel");
  var countLevels = 1;
  var countMoves = 0;
  


  // A4) GAME LAYOUT
  // Create deck of cards by looping through playingCards
  // see step A4.1 at the end
  function createGameLayout() {

        // Display moves as stats above game layout
    moves.textContent = countMoves;
    // Display levels as stats above game layout
    level.textContent = countLevels;
    displayResult.textContent = matchingCards.length;

    // if level is 1 then loop 0-11
    // else if level is 2 then loop 0-23
    // else if lvel is3 then loop from ...-...

    // loop through each card in playingCards
    for (let i = 0; i < playingCards.length; i++) {

      // Create an HTML element of img for
      // each card and store it in (var) card
      var card = document.createElement("img");

      // Set an attribute for each img of
      // src="assets/images/blank.png" which will be
      // the placeholder card that the player has to flip
      card.setAttribute("src", "assets/images/blank.png");

      // Set another attribute for each img of data-id
      // with the value of the current loop number (i)
      card.setAttribute("data-id", i);

      // Adding an event listener to check for clicks on each card
      // which call the function 'selectedCard', see REGISTER CARDS A5
      card.addEventListener("click", selectedCard);

      // Issue: User can double click the same image which counts as a match 
      // Fix: see B1 and B2

      // Append the variable 'card' to the HTML element 'board'
      board.appendChild(card);

      // By the end of this function the clickable tag element
      // should look like this
      // <img src="assets/images/blank.png" data-id="0">

    }

    // t: test if this function repsonses to console
    console.log("t4: Testing if this function prints to console: Ok");

  }




  // A6) GAME RESULT
  // Evaluate flipped cards
  function evaluateCards() {

    // Store all cards in cards
    var cards = document.querySelectorAll("img");

    // Store card id values
    const firstChoice = cardsFlippedId[0]; // Set 1st value of cardsFlippedId
    const secondChoice = cardsFlippedId[1]; // Set 2nd value of cardsFlippedId
    const thirdChoice = cardsFlippedId[2];  // Set 3rd value of cardsFlippedId
    // The 3rd value is reserved for the case of too many clicks within 500ms

    // Case 1:
    // B) Fix: If user manages to choose more than 2 cards within 500ms
    if (cardsFlippedId.length > 2) {
      cardsFlipped.pop(); // delete last array item which in this case is a third entry
      cardsFlippedId.pop(); // delete last array item which in this case is a third entry
      cards[thirdChoice].setAttribute("src", "assets/images/blank.png"); // resets the third card
    }

    // Case 2:
    // Comparing card 'name'
    if (cardsFlipped[0] === cardsFlipped[1]) {
      displayAssistant.textContent = "You found a match!";




      // C) Get index.html modal view and store as variable
      var modalView = document.querySelector(".modal");
      var modalContent = document.querySelector(".modal-assistant");

      msg.textContent = "Congratulations! You found them all";
      levelModal.textContent = countLevels;
      movesModal.textContent = countMoves;
      score.textContent = matchingCards.length;
      
      // optionReset.textContent =
      // optionNextLevel.textContent =




      // Create display content
      modalView.style.display = "block";



      // B2) Fix: repeatable clicks on already selected cards by removing event listener
      cards[firstChoice].removeEventListener("click", selectedCard);
      cards[secondChoice].removeEventListener("click", selectedCard);

      // Score Count, adding 
      matchingCards.push(cardsFlipped); // see A6.1

      // t: test log scores
      console.log("t: matchingCards = " + matchingCards.length);

    } else {
      // Case 3:
      cards[firstChoice].setAttribute("src", "assets/images/blank.png");
      cards[secondChoice].setAttribute("src", "assets/images/blank.png");
      displayAssistant.textContent = "Try again";
    }

    // Reset cardsFlipped value back to an empty array
    cardsFlipped = []; // see A5.2, make ready to flip again
    // Reset cardsFlippedId value back to and empty array
    cardsFlippedId = []; // see A5.3, make ready to flip again

    // Display Score Count
    displayResult.textContent = matchingCards.length; // see A6.2

    // End of game
    if (matchingCards.length === playingCards.length/2) {
      displayAssistant.textContent = "Congratulations! You found them all";

      // Create modal view

    }

  }



  // A5) REGISTER AND RENDER SELECTED CARDS
  // Function to register and render selected card
  function selectedCard() {

    // REGISTER selected card
    // Added the attribute data-id to mark each card with a
    // number in step 4. Storing the data-id attribute value 
    // of each card in the variable cardId to make it usable 
    // for this function
    const cardId = this.getAttribute("data-id"); 

    // Creating an empty array cardsFlipped[], see step A5.2
    // Populate empty array by appending image name here
    cardsFlipped.push(playingCards[cardId].name); 
    // ISSUE HERE: player can add more than 2 cards when 
    // clicking quickly over multiple cards

    // Creating an empty cardsFlippedId[] array, see step A5.3
    // Populate empty array by appending cardId value here
    cardsFlippedId.push(cardId);

    // RENDER the selected card
    this.setAttribute("src", playingCards[cardId].img);

    // t: test log registered cards
    console.log("t: Selected card name = " + cardsFlipped);
    console.log("t: Selected card id = " + cardsFlippedId);
    console.log("t: Selected card total = " + cardsFlipped.length);

    // EVALUATE
    // If 2 cards have been chosen, evaluate cards with setTimeout
    if (cardsFlippedId.length === 2) {

      // B2) Preventing double click to select the same card twice
      if (cardsFlippedId[0] === cardsFlippedId[1]) {
        displayAssistant.textContent = "You picked the same card. Choose another one!";
        cardsFlippedId.pop(); // delete last array item which in this case is a double entry
        cardsFlipped.pop(); // delete last array item which in this case is a double entry
        return;
      } 
      setTimeout(evaluateCards, 500)

    }

    // C) Adding count moves feature 
    // Add 1 for every move in countMoves
    countMoves++;
    // Display moves as stats above game layout
    moves.textContent = countMoves;
    // Display levels as stats above game layout
    level.textContent = countLevels;

  }

  // A4.1)
  createGameLayout();

});

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


  // a7)
  // Randomize cards
  playingCards.sort(() => 0.5 - Math.random());

  // a3.1) Get board element from index.html and store as board
  const board = document.querySelector(".board");

  // a3.2) Get result element from index.html and set as displayResult
  const displayResult = document.querySelector("#result");

  // a8) Get display-alert from index.html and set as displayAlert
  const displayAlert = document.querySelector("#display-alert");

  // a5.2) Creating an empty array cardsFlipped[]
  var cardsFlipped = [];

  // a5.3) Create variable cardsFlippedId as empty array
  var cardsFlippedId = [];

  // a6.1) Create variable matchingCards as empty array
  var matchingCards = [];


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
      card.addEventListener("click", selectedCard);

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


  // a6)
  // Evaluate flipped cards
  function evaluateCards() {

    // Store all cards in cards
    var cards = document.querySelectorAll("img");

    // Setting the 1st value of cardsFlippedId as firstChoice and
    // setting the 2nd value of cardsFlippedId as secondChoice
    const firstChoice = cardsFlippedId[0];
    const secondChoice = cardsFlippedId[1];

    // Compare card names
    if (cardsFlipped[0] === cardsFlipped[1]) {
      // alert("You found a match");
      displayAlert.textContent = "You found a match!";
      // cards[firstChoice].setAttribute("src", "assets/images/white.png");
      // cards[secondChoice].setAttribute("src", "assets/images/white.png");
      // Advance: show only for limited time

      // Fix: repeatable clicks on selected cards
      cards[firstChoice].removeEventListener("click", selectedCard);
      cards[secondChoice].removeEventListener("click", selectedCard);


      matchingCards.push(cardsFlipped); // see a6.1

      // t: Test
      console.log("matchingCards " + matchingCards.length);

    } else {
      cards[firstChoice].setAttribute("src", "assets/images/blank.png");
      cards[secondChoice].setAttribute("src", "assets/images/blank.png");
      // alert("Sorry, try again");
      displayAlert.textContent = "Try again";
    }

    // Reset cardsFlipped value back to an empty array
    cardsFlipped = []; // see A5.2, make ready to flip again
    // Reset cardsFlippedId value back to and empty array
    cardsFlippedId = []; // see A5.3, make ready to flip again

    displayResult.textContent = matchingCards.length; // see a6.2

    if (matchingCards.length === playingCards.length/2) {
      displayAlert.textContent = "Congratulations! You found them all";
    }

  }


  // a5)
  // Function to register and render selected card
  function selectedCard() {

    // In step 4 we added the attribute data-id to mark
    // each card in the game with a number. Here we store
    // the data-id attribute value of each card in the
    // variable cardId to make it usable for this function
    var cardId = this.getAttribute("data-id");

    // t: Test Log cardId value in console of the card flipped
    console.log("t5: cardId: " + cardId);

    // Creating an empty array cardsFlipped[] in step a5.2
    // Populate empty array by appending image name value
    cardsFlipped.push(playingCards[cardId].name);

    // t: Test log data type and name of (1st and 2nd) card
    console.log("t6: " + typeof(cardsFlipped) + " = " + cardsFlipped + " " + cardsFlipped.length);

    // Creating an empty cardsFlippedId[] array in step a5.3
    // Populate empty array by appending cardId value
    cardsFlippedId.push(cardId);

    // t: Test log content of cardsFlippedId to console
    console.log("t7: cardsFlippedId = " + cardsFlippedId);

    // Render the selected card
    this.setAttribute("src", playingCards[cardId].img);


    // If 2 cards have been chosen evaluate cards with setTimeout

    // OPTION 1
    // Issues: User can double click the same image which counts as a match
    // if (cardsFlipped.length === 2) {
    //   setTimeout(evaluateCards, 500);
    // }

    // OPTION 2
    // Fix: User can double click the same image which counts as a match - is fixed
    if (cardsFlippedId.length == 2) {

      // b1) Preventing to select the same card twice
      if (cardsFlippedId[0] === cardsFlippedId[1]) {
        displayAlert.textContent = "You picked the same card. Choose another one!";
        cardsFlippedId.pop();
        cardsFlipped.pop();
        return;
      }
      setTimeout(evaluateCards, 500)

    } else if (cardsFlippedId.length >= 3) {
        displayAlert.textContent = "You chose more than 2 cards!";
        // cardsFlippedId.pop();
        // cardsFlipped.pop();
        // return;

    }

    // Issue: If clicking quickly over some random cards you can flipp three or more cards
    // Fix: allow only 2 cards to flip per turn! How?

    // Test if selectedCard is recognized in console
    console.log("t5: Testing if selectedCard function prints to console: Ok");
  }

  // a4.1)
  createDeckOfCards();

});

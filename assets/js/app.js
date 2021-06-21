/*
Memory Game - Comments Structure
Numbers such as A1.2) after the letter refer to the order I wrote this script 

A) Bare minimum code to get a playable result
B) Fixes to make the game more stable and prevent game play bugs
C) More features and additional levels
t) testing stuff
*/

// jshint esversion: 6


// t: test if index.html loads app.js file
console.log("t1: Link from app.js to index.html established: Ok");



// A)
/* load this "Memory Game" when DOM content is loaded
------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {

  // t: test if event listener works to check if DOM is loaded
  console.log("t2: The Dom has loaded: Ok");



  /* VARIABLES
  ------------------------------------------------------------- */
  let board = document.querySelector(".board"); // A3.1) shows playing cards
  let displayResult = document.querySelector("#result"); // A3.2) shows score
  let gameAssistant = document.querySelector("#game-assistant"); // A8) shows game alerts
  let moves = document.querySelector("#moves"); // C) shows player moves
  let level = document.querySelector("#level"); // C) shows game level

  // C) variables - modal game assistant
  let modalAssistant = document.querySelector(".modal-view-assistant"); // C) to show/hide modal view
  let modalMsg1 = document.querySelector("#modal-msg-1"); // C) shows modal content 1
  let modalMsg2 = document.querySelector("#modal-msg-2"); // C) shows modal content 2
  let modalMsg3 = document.querySelector("#modal-msg-3"); // C) shows modal content 3
  let modalMsg4 = document.querySelector("#modal-msg-4"); // C) shows modal content 4
  let modalMsg5 = document.querySelector("#modal-msg-5"); // C) shows modal content 5
  let modalBtnOption = document.querySelector("#modal-btn-option"); // C) Modal view button

  // C) variables - modal preview for photographic-memory game play
  let modalPreviewAssistant = document.querySelector(".modal-preview-assistant"); // C) to show/hide modal view
  let modalPreview = document.querySelector(".modal-preview"); // C) shows card preview
  let modalPreviewMsg1 = document.querySelector("#modal-preview-msg-1"); // C) shows preview message
  let modalPreviewBtnOption = document.querySelector("#modal-preview-btn-option"); // C) Modal view button

  let playingCards = []; // A2) store playing cards
  let cardsFlipped = []; // A5.2) store cards chosen
  let cardsFlippedId = []; // A5.3) store cards chosen id
  let matchingCards = []; // A6.1) store cards matched
  let currentLevel = 0; // C) store game level
  let countMoves = 0; // C) store player moves



  /* C) MODAL VIEW game assistant and level creator
  ------------------------------------------------------------- */
  modalAssistant.style.display = "block"; // show modal view
  modalMsg2.textContent = "Is a photographic memory a real thing?"; // show teaser
  modalMsg3.textContent = "Play this memory game and find out!"; // intro
  modalBtnOption.textContent = "Let's Play"; // set button text
  modalBtnOption.addEventListener("click", levelOption); // calls levelOption function

  // function - to clear current game stats
  function clearBoard() {
    level.textContent = currentLevel; // display game level in the header
    board.innerHTML = ""; // clear cards in gaming board
    matchingCards.length = 0; // clear match count
    countMoves = 0; // clear moves count
    loadGame(); // load game
    modalAssistant.style.display = "none"; // hide modal view
  }

  // function - to load different levels
  function levelOption() {

    if (currentLevel === 0) {
      currentLevel = 1; // set game level to 1
      clearBoard(); // clear current game stats
      modalPreviewAssistant.style.display = "block"; // show game preview
      modalBtnOption.textContent = "Next Level"; // pre-set button text for next modal view
    } else if (currentLevel === 1) {
      currentLevel = 2;
      clearBoard();
      modalPreviewAssistant.style.display = "block";
      modalBtnOption.textContent = "Next Level";
    } else if (currentLevel === 2) {
      currentLevel = 3;
      clearBoard();
      modalPreviewAssistant.style.display = "block";
      modalBtnOption.textContent = "Next Level";
    } else if (currentLevel === 3) {
      currentLevel = 4;
      clearBoard();
      modalPreviewAssistant.style.display = "block";
      modalBtnOption.textContent = "Play Again";
    } else if (currentLevel === 4) {
      currentLevel = 1;
      playingCards = []; // empty playing cards when game completed
      clearBoard();
      modalPreviewAssistant.style.display = "block";
      modalBtnOption.textContent = "Next Level";
    }

  } // function levelOption() END



  /* C) function - game play
  ------------------------------------------------------------- */
  function loadGame() {

    // A2) PLAYING CARDS
    // create array with objects of cards with image name
    // and path for each img . each card is repeated to create pairs
    // extend game by adding more images or image cardPacks

    const cardPackOne = [
      {name: "card1", img: "assets/images/card1.png"},
      {name: "card1", img: "assets/images/card1.png"},
      {name: "card2", img: "assets/images/card2.png"},
      {name: "card2", img: "assets/images/card2.png"},
      {name: "card3", img: "assets/images/card3.png"},
      {name: "card3", img: "assets/images/card3.png"},
      {name: "card4", img: "assets/images/card4.png"},
      {name: "card4", img: "assets/images/card4.png"}
    ];

    const cardPackTwo = [
      {name: "card5", img: "assets/images/card5.png"},
      {name: "card5", img: "assets/images/card5.png"},
      {name: "card6", img: "assets/images/card6.png"},
      {name: "card6", img: "assets/images/card6.png"}
    ];

    const cardPackThree = [
      {name: "card7", img: "assets/images/card7.png"},
      {name: "card7", img: "assets/images/card7.png"},
      {name: "card8", img: "assets/images/card8.png"},
      {name: "card8", img: "assets/images/card8.png"}
    ];

    const cardPackFour = [
      {name: "card9", img: "assets/images/card9.png"},
      {name: "card9", img: "assets/images/card9.png"},
      {name: "card10", img: "assets/images/card10.png"},
      {name: "card10", img: "assets/images/card10.png"}
    ];



    /* C) CARD OPTIONS depending on game level
    ------------------------------------------------------------- */
    // merging cardPack's arrays with .concat()
    if (currentLevel === 1) {
      playingCards = cardPackOne;
    } else if (currentLevel === 2) {
      playingCards = cardPackOne.concat(cardPackTwo);
    } else if (currentLevel === 3) {
      playingCards = cardPackOne.concat(cardPackTwo, cardPackThree);
    } else if (currentLevel === 4) {
      playingCards = cardPackOne.concat(cardPackTwo, cardPackThree, cardPackFour);
    }

    // A7) RANDOMIZE CARDS with .sort() and Math.random()
    playingCards.sort(() => 0.5 - Math.random());

    // t: test if array prints to console
    console.log("t3: Current playingCards array: " + playingCards[0] + " Ok");
    console.table(playingCards);



    /* C) MODAL PREVIEW CARDS
    ------------------------------------------------------------- */
    // C) function - that shows preview of card set
    function getCardPreview() {

      for (let i = 0; i < playingCards.length; i++) {

        let preview = playingCards[i].img; // store path of img
        let cardPreview = document.createElement("img"); // create, store html img element
        cardPreview.setAttribute("src", preview); // set src attribute to stored image path
        cardPreview.setAttribute("alt", "playingcard"); // set alt attribute
        modalPreview.appendChild(cardPreview); // .append() images to modal preview
      }
      modalPreviewMsg1.textContent = "Memorize letter pairs, locations and colors."; // how to text
      modalPreviewBtnOption.textContent = "Challenge Your Memory"; // set button text
      modalPreviewBtnOption.addEventListener("click", closeCardPreview); // call closeCardPreview()
    }

    getCardPreview(); // execute function

    function closeCardPreview() {
      modalPreview.innerHTML = ""; // B) MPORTANT to empty modal preview content to avoid conflicts
      modalPreviewAssistant.style.display = "none"; // hide modal preview
    }



    /* A4) GAME LAYOUT
    ------------------------------------------------------------- */
    // create deck of cards by looping through playingCards
    // this function is executed at step A4.1 at the end
    function createGameLayout() {

      moves.textContent = countMoves; // display moves count in header
      displayResult.textContent = matchingCards.length; // display score in header
      // game level display is invoked in the clearBoard() function


      // loop through each card in playingCards
      for (let i = 0; i < playingCards.length; i++) {

        // create an html element of img for
        // each card and store it in (var) card
        var card = document.createElement("img");

        // set an attribute for each img of
        // src="assets/images/blank.png" which will be
        // the placeholder card that the player has to flip
        card.setAttribute("src", "assets/images/blank.png");

        // set another attribute for each img of data-id
        // with the value of the current loop number (i)
        card.setAttribute("data-id", i);

        // set alt attribute for image
        card.setAttribute("alt", "playingcard");

        // adding an event listener to check for clicks on each card
        // which calls the function 'selectedCard', see REGISTER AND RENDER A5
        card.addEventListener("click", selectedCard);

        // ISSUE: user can double click the same image which counts as a match 
        // FIXED: see B1 and B2

        // append the variable 'card' to the html element 'board'
        board.appendChild(card);

        // by the end of this function the clickable tag element
        // should look like this
        // <img src="assets/images/blank.png" data-id="0">

        // t: test log function repsonse
        // console.log("t4: Testing if this function logs to console: Ok");
        
      } // END of loop

    } // function createGameLayout() END



    /* A6) GAME RESULTS and evaluation of flipped cards
    ------------------------------------------------------------- */
    function evaluateCards() {

      // store all card images in (var) cards
      var cards = document.querySelectorAll("img");

      // store card id values
      const firstChoice = cardsFlippedId[0]; // set 1st value of cardsFlippedId
      const secondChoice = cardsFlippedId[1]; // set 2nd value of cardsFlippedId
      const thirdChoice = cardsFlippedId[2];  // set 3rd value of cardsFlippedId
      // the 3rd value is reserved for the case of too many clicks within 500ms


      /* ERASE tripple or more entries
      ------------------------------ */
      // B) FIXED: if user/player manages to choose more than 2 cards within 500ms
      if (cardsFlippedId.length > 2) {
        cardsFlipped.pop(); // delete last array item which in this case is a third entry
        cardsFlippedId.pop(); // delete last array item which in this case is a third entry
        cards[thirdChoice].setAttribute("src", "assets/images/blank.png"); // resets the third card
      }


      /* CASE 1 - It's a match
      ------------------------------ */
      // comparing card names
      if (cardsFlipped[0] === cardsFlipped[1]) {
        gameAssistant.textContent = "It's a match!";

        // avoid repeatable clicks
        // B2) FIXED: remove event listener on already selected cards
        cards[firstChoice].removeEventListener("click", selectedCard);
        cards[secondChoice].removeEventListener("click", selectedCard);

        // adding to score count with .push()
        matchingCards.push(cardsFlipped); // see A6.1

        // t: test log scores
        console.log("t: matchingCards = " + matchingCards.length);

      } else {


        /* CASE 2 - It's not a match
        ------------------------------ */
        // switch chosen cards back to blank cards
        cards[firstChoice].setAttribute("src", "assets/images/blank.png");
        cards[secondChoice].setAttribute("src", "assets/images/blank.png");
        gameAssistant.textContent = "Please try again";
      }


      // display SCORE COUNT
      displayResult.textContent = matchingCards.length; // see A6.2

      // CLEAR cards stored
      cardsFlipped = []; // empty cards chosen array A5.2 for next game play
      cardsFlippedId = []; // empty cards chosen id array A5.3 for next game play


      /* END of each level
      ------------------------------ */
      // show modal assistant when all playing cards have been found
      if (matchingCards.length === playingCards.length/2) {

        // C) create modal view content
        modalMsg1.textContent = "Congratulations! You found all cards.";
        modalMsg2.textContent = "Level: " + currentLevel;
        modalMsg3.textContent = "Total Score: " + matchingCards.length;
        modalMsg4.textContent = "Turns: " + Math.round(countMoves); // show round numbers

        // clear game assistant in the header
        gameAssistant.textContent = "";

        // and show modal assistant
        modalAssistant.style.display = "block";
        

        /* END of game
        ------------------------------ */
        // change modal message by the end of level 4
        if (currentLevel === 4) {

          modalMsg1.textContent = "Congratulations! You Completed The Memory Game.";

          // show link for more info
          modalMsg5.textContent = "Find out more about "; // text before link
          let linkTo = document.createElement("a"); // create anchor element
          linkTo.setAttribute("href", "https://en.wikipedia.org/wiki/Eidetic_memory"); // set link address
          linkTo.setAttribute("target", "_blank"); // set target _blank
          linkTo.setAttribute("rel", "noopener"); // set noopener for security
          linkTo.innerText = "Eidetic memory"; // set link
          modalMsg5.appendChild(linkTo); // append() to message
        }

      }

    } // function evaluateCards() END



    /* A5) REGISTER AND RENDER selected cards
    ------------------------------------------------------------- */
    // function - to register and render selected cards
    function selectedCard() {

      // REGISTER selected card
      // Added the attribute data-id to mark each card with a
      // id number in step 4. 
      // now storing the data-id attribute value of selected card
      // in the variable cardId to make it usable for this function
      const cardId = this.getAttribute("data-id"); 

      // using .push() method to push cards image name to
      // cardsFlipped array, created in step A5.2
      cardsFlipped.push(playingCards[cardId].name); 
      // ISSUE: player can add more than 2 cards when 
      // clicking fast enough over multiple cards
      // FIXED in B1 and B2

      // using .push() method to push cards data-id to
      // cardsFlippedId array, created in step A5.3
      cardsFlippedId.push(cardId);

      // RENDER SELECTED card - action
      this.setAttribute("src", playingCards[cardId].img);
      // this changes the image tag 
      // from: <img src="assets/images/blank.png" data-id="0">
      // to: <img src="assets/images/card1.png" data-id="0">

      // t: test log registered cards
      console.log("t: Selected card name = " + cardsFlipped);
      console.log("t: Selected card id = " + cardsFlippedId);
      console.log("t: Selected card total = " + cardsFlipped.length);

      // EVALUATE and get GAME RESULTS with evaluateCards() function
      // if 2 cards have been chosen, evaluate cards with setTimeout
      if (cardsFlippedId.length === 2) {

        // B1) FIXED: preventing double click to select the same card twice
        if (cardsFlippedId[0] === cardsFlippedId[1]) {
          gameAssistant.textContent = "Choose another one!";
          cardsFlippedId.pop(); // delete last array item which in this case is a double entry
          cardsFlipped.pop(); // delete last array item which in this case is a double entry
          return;
        } 
        setTimeout(evaluateCards, 500);

      }


      /* C) COUNT MOVES feature 
      ------------------------------------------------------------- */
      // count plus 0.5 for every move in countMoves, counting 2 moves as one turn
      countMoves = countMoves + 0.5;
      // display moves in the header above game layout
      moves.textContent = Math.round(countMoves); // show round numbers only

    } // function selectedCard() END

    // A4.1)
    createGameLayout();

  } // function loadGame() END

}); // function(event) END
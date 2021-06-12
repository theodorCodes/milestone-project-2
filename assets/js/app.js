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
  
});
/*
Send email function
*/


/* sendMail() function
------------------------------------------------------------- */
// declaring function with a parameter of contactForm
function sendMail(contactForm) {

  // emailjs function provided by EmailJS API
  // imported in the html header section.
  // passing 3 parameters ("service id", "username", and the values)
  emailjs.send("service_kh69pes", "game-feedback", {
      
    // using the 'keys' from EmailJS template and 
    // passing the 'values' of the id attribute 
    // in the contact form from index.html 
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value,
    "project_request": contactForm.projectsummary.value
  })

  // using the .then promise method
  // with a success and a error response

  .then (
    function(response) {

      console.log("SUCCESS", response);
      
      // set input fields back to empty strings
      document.getElementById('fullname').value = '';
      document.getElementById('emailaddress').value = '';
      document.getElementById('projectsummary').value = '';

      // close modal view
      modalContactView.style.display = "none";

      // thank you message
      let gameAssistant = document.querySelector("#game-assistant");
      gameAssistant.textContent = "Thank you for your input!";
      
    },
    function(error) {

      console.log("FAILED", error);

    }

  );

  return false;  // to block from loading a new page or prevent page refresh

}

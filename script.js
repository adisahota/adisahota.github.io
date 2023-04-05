/* This function alerts if the user has input any message in the textarea or not in contact.html*/
function showNotification() {
  var textarea = document.getElementById("details");
  if (textarea.value === "") {
    alert("Please enter some text in the textarea before submitting");
  } else {
    alert("Thank you for your message");
  }
}

window.onload = function() {
  let color1 = document.getElementById("color-1");
  color1.addEventListener("click", function() {
    changeBackgroundColor("#d3eaf2");
    changeHeadColor("darkcyan")
    changeTextColor("#000000")
  });

  let color2 = document.getElementById("color-2");
  color2.addEventListener("click", function() {
    changeBackgroundColor("#363535");
    changeHeadColor("#9d44b5")
    changeTextColor("#149414")
  });    

  let color3 = document.getElementById("color-3");
  color3.addEventListener("click", function() {
    changeBackgroundColor("#D8C99B");
    changeHeadColor("#A4243B")
    changeTextColor("#273E47")
  });      

  function changeBackgroundColor(newColor) {
    let body = document.getElementById("body");
    body.style.backgroundColor = newColor;
  }

  function changeHeadColor(newColor) {
    let headers = document.getElementsByTagName("header");
    for (let i = 0; i < headers.length; i++) {
      headers[i].style.color = newColor;
    }
  }

  function changeTextColor(newColor) {
    let elements = document.querySelectorAll("body *:not(#header):not(a):not(footer p):not(button)"); // Select all elements except the one with id "header"
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = newColor;
    }
  }
};

      // Function to reveal hidden text on click
function myClickHandler(event) {
  event.target.style.color = "black";
}

// Register the event handlers here
let elements = document.getElementsByClassName("highlight");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", myClickHandler);
}
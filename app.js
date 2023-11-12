// variable decleration
let incrementBtn = document.getElementById("increment-btn");

let countEl = document.getElementById("count");

// intialize the count as 0
let count = 0;

// listen for clicks on the increment button
incrementBtn.addEventListener("click", function () {
  // increment the count variable when the button is clicked
  count = count + 1;
  // change the count-el in the HTML to reflect the new count
  document.getElementById("count").innerHTML = count;
});

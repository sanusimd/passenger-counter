// variable decleration
let incrementBtn = document.getElementById("increment-btn");
let countEl = document.getElementById("count");
let saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");

// intialize the count as 0
let count = 0;

// listen for clicks on the increment button
incrementBtn.addEventListener("click", function () {
  // increment the count variable when the button is clicked
  count += 1;
  // change the count-el in the HTML to reflect the new count
  countEl.textContent = count;
});

// Save button functionality
// listen for clicks on the save button
saveBtn.addEventListener("click", function () {
  // Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let strCount = count + " - ";
  //   Render the variable in the saveEl using textcontent
  saveEl.textContent += strCount;
  console.log(saveEl);
  // reset count element and count variable to 0
  countEl.textContent = 0;
  count = 0;
});

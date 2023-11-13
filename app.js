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
  document.getElementById("count").textContent = count;
});

// Save button functionality
// listen for clicks on the save button
saveBtn.addEventListener("click", function () {
  // Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let strCount = count + " - ";
  //   Render the variable in the saveEl using innerText
  saveEl.textContent += strCount;
});

// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
// 3. Render the variable in the saveEl using innerText
// NB: Make sure to not delete the existing content of the paragraph

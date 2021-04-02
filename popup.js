let reviewText = document.getElementById('reviewText');
let submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", submitReview);

function submitReview() {
  console.log("Reviewing Text " + reviewText)
}

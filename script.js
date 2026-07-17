///share pg
const reviewForm = document.getElementById("reviewForm");
const review = document.getElementById("review");
const count = document.getElementById("count");
const message = document.getElementById("message");

if (review) {
  review.addEventListener("input", function () {
    count.textContent = review.value.length + " / 300 characters";
  });
}

if (reviewForm) {
  reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const artist = document.getElementById("artist").value.trim();
    const venue = document.getElementById("venue").value.trim();

    if (review.value.length < 20) {
      message.textContent =
        "Please enter at least 20 characters in your review.";
      message.style.color = "red";
      return;
    }

    localStorage.setItem("reviewName", name);

    message.textContent = "Thanks for sharing your concert experience!";
    message.style.color = "lightgreen";

    alert("Your review has been submitted!");

    reviewForm.reset();
    count.textContent = "0 / 300 characters";
  });
}

//hpme pg

const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thanks for subscribing!");

    subscribeForm.reset();
  });
}
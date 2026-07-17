// ///share pg
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

    if (review.value.length < 20) {
      message.textContent = "Please enter at least 20 characters.";
      message.style.color = "red";
      return;
    }

    localStorage.setItem("reviewName", name);

    message.textContent = "Thanks for sharing your concert experience!";
    message.style.color = "lightgreen";

    alert("Review submitted!");

    reviewForm.reset();

    if (count) {
      count.textContent = "0 / 300 characters";
    }
  });
}

//home pg

const subscribeForm = document.getElementById("subscribeForm");

if (subscribeForm) {
  subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const subscribeMessage = document.getElementById("subscribeMessage");

    subscribeMessage.textContent = "Thanks for subscribing!";

    subscribeMessage.style.color = "lightgreen";

    alert("Thanks for subscribing!");

    subscribeForm.reset();
  });
}

//reviews page

const searchReviews = document.getElementById("searchReviews");

if (searchReviews) {
  searchReviews.addEventListener("input", function () {
    const filter = searchReviews.value.toLowerCase();

    const cards = document.querySelectorAll(".flip-card");

    cards.forEach(function (card) {
      const text = card.textContent.toLowerCase();

      if (text.includes(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

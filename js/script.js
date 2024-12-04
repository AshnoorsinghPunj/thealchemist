// Array of quotes from the alchemist
const quotes = [
  "And, when you want something, all the universe conspires in helping you to achieve it.",
  "It's the possibility of having a dream come true that makes life interesting.",
  "One is loved because one is loved. No reason is needed for loving.",
  "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
  "So, I love you because the entire universe conspired to help me find you.",
  "The secret of life, though, is to fall seven times and to get up eight times.",
  "The simple things are also the most extraordinary things, and only the wise can see them.",
];

// Array of books by author with title, rating, and image
const booksByAuthor = [
  { title: "The Pilgrimage", rating: 4.0, img: "assets/book1.jpg" },
  { title: "Brida", rating: 4.5, img: "assets/book2.jpg" },
  { title: "Veronika Decides to Die", rating: 4.0, img: "assets/book3.jpg" },
  { title: "Eleven Minutes", rating: 4.5, img: "assets/book4.jpg" },
  { title: "Maktub", rating: 4.5, img: "assets/book5.jpg" },
  { title: "The Spy", rating: 5, img: "assets/book6.jpg" },
  { title: "Hippie", rating: 4, img: "assets/book7.jpg" },
];

// Generate HTML for star ratings based on the rating value
function genReviewsStars(rating) {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Check for half star
  const emptyStars = 5 - fullStars - halfStars; // Remaining stars are empty

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<i class="fa fa-star text-warning"></i>`; // Full star
  }
  for (let i = 0; i < halfStars; i++) {
    starsHTML += `<i class="fas fa-star-half-stroke text-warning"></i>`; // Half star
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<i class="fa fa-star text-secondary"></i>`; // Empty star
  }
  return starsHTML;
}

// Add cards for books by the author into the container
function addBooksCardToCards() {
  const container = document.querySelector(".moreByAuthor .cards");

  booksByAuthor.forEach((book) => {
    const cardHTML = `
        <div class="card bg-black col-12 col-md-6 col-lg-4 px-2 rounded-4 overflow-hidden">
          <div class="custOverlay"></div>
          <img src="${book.img}" alt="${book.title}" class="card-img" />
          <div class="card-img-overlay">
            <div class="position-relative w-100 h-100 d-flex flex-column justify-content-end align-items-start pb-1">
              <h4 class="card-title z-2 fw-bold text-light">${book.title}</h4>
              <div class="z-2 d-flex gap-1 align-items-center">
                ${genReviewsStars(book.rating)} (${book.rating.toFixed(1)})
              </div>
            </div>
          </div>
        </div>
      `;
    container.innerHTML += cardHTML; // Append each card to the container
  });
}
addBooksCardToCards(); // Call the function to render book cards

// Rotate through quotes, displaying one at a time with animation
let currentIndex = 0;

function rotateQuotes() {
  const quotesElement = document.getElementById("quotes");
  const newQuote = document.createElement("p");
  newQuote.textContent = quotes[currentIndex]; // Set the current quote
  newQuote.classList.add("slide-up"); // Add animation class

  quotesElement.appendChild(newQuote);

  setTimeout(() => {
    newQuote.classList.add("slide-down"); // Trigger slide-down animation
  }, 3000);

  currentIndex = (currentIndex + 1) % quotes.length; // Loop through quotes
}
setInterval(rotateQuotes, 3000); // Call the function every 3 seconds

// Scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Toggle visibility of the "scroll to top" button based on scroll position
const scrollToTopButton = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.remove("d-none"); // Show button
  } else {
    scrollToTopButton.classList.add("d-none"); // Hide button
  }
});

// Handle the purchase form submission
function purchaseNow() {
  const form = document.querySelector("#purchaseForm");
  const inputs = form.querySelectorAll("input, textarea");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("is-invalid"); // Highlight invalid fields
      valid = false;
    } else {
      input.classList.remove("is-invalid"); // Remove invalid highlight
    }
  });

  if (!valid) {
    return; // Exit if validation fails
  }

  document.getElementById("launchOrderAlertModal").click(); // Show success modal
  form.reset(); // Reset form fields
}

// Handle the subscription form submission
function subscribe() {
  const form = document.querySelector("#subscriptionForm");
  const inputs = form.querySelectorAll("input");
  let valid = true;

  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("is-invalid"); // Highlight invalid fields
      valid = false;
    } else {
      input.classList.remove("is-invalid"); // Remove invalid highlight
    }
  });

  if (!valid) {
    return; // Exit if validation fails
  }

  document.getElementById("launchSubscribeAlertModal").click(); // Show success modal
  form.reset(); // Reset form fields
}

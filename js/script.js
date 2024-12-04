const quotes = [
  "And, when you want something, all the universe conspires in helping you to achieve it.",
  "It's the possibility of having a dream come true that makes life interesting.",
  "One is loved because one is loved. No reason is needed for loving.",
  "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
  "So, I love you because the entire universe conspired to help me find you.",
  "The secret of life, though, is to fall seven times and to get up eight times.",
  "The simple things are also the most extraordinary things, and only the wise can see them.",
];

const booksByAuthor = [
  { title: "The Pilgrimage", rating: 4.0, img: "assets/book1.jpg" },
  { title: "Brida", rating: 4.5, img: "assets/book2.jpg" },
  { title: "Veronika Decides to Die", rating: 4.0, img: "assets/book3.jpg" },
  { title: "Eleven Minutes", rating: 4.5, img: "assets/book4.jpg" },
  { title: "Maktub", rating: 4.5, img: "assets/book5.jpg" },
  { title: "The Spy", rating: 5, img: "assets/book6.jpg" },
  { title: "Hippie", rating: 4, img: "assets/book7.jpg" },
];

//render stars

function genReviewsStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<i class="fa fa-star text-warning"></i>`;
  }
  for (let i = 0; i < halfStars; i++) {
    starsHTML += `<i class="fas fa-star-half-stroke text-warning"></i>`;
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += `<i class="fa fa-star text-secondary"></i>`;
  }
  return starsHTML;
}

//add books by author cards to .cards

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
                ${genReviewsStars(book.rating)}
                (${book.rating.toFixed(1)})
              </div>
            </div>
          </div>
        </div>
      `;
    container.innerHTML += cardHTML;
  });
}
addBooksCardToCards();

// animate quotes one by one

let currentIndex = 0;

function rotateQuotes() {
  const quotesElement = document.getElementById("quotes");
  const newQuote = document.createElement("p");
  newQuote.textContent = quotes[currentIndex];
  newQuote.classList.add("slide-up");

  quotesElement.appendChild(newQuote);
  setTimeout(() => {
    newQuote.classList.add("slide-down");
  }, 3000);

  currentIndex = (currentIndex + 1) % quotes.length;
}

setInterval(rotateQuotes, 3000);

// scroll to top

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// hide .scrollToTop if already on top else show
const scrollToTopButton = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.remove("d-none");
  } else {
    scrollToTopButton.classList.add("d-none");
  }
});


// purchase now
function purchaseNow(){
    
    //check for required input are not empty in #purchaseForm
    const form = document.querySelector("#purchaseForm");
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;
    inputs.forEach((input) => {
        if (!input.value) {
            input.classList.add("is-invalid");
            valid = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });
    if (!valid) {
        return;
    }

    document.getElementById("launchOrderAlertModal").click();
    form.reset();
}

// subscription submit

function subscribe(){
    const form = document.querySelector("#subscriptionForm");
    const inputs = form.querySelectorAll("input");
    let valid = true;
    inputs.forEach((input) => {
        if (!input.value) {
            input.classList.add("is-invalid");
            valid = false;
        } else {
            input.classList.remove("is-invalid");
        }
    });
    if (!valid) {
        return;
    }

    document.getElementById("launchSubscribeAlertModal").click();
    form.reset();
}
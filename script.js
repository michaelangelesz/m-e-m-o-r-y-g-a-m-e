const section = document.createElement("section");
section.classList.add("memory-game");

const h1 = document.createElement("h1");
const text1 = document.createTextNode("Lives: ");
const span = document.createElement("span");
span.classList.add("playerLivesCount");
span.textContent = "9";
h1.appendChild(text1);
h1.appendChild(span);

// Add the h1 to the DOM
document.body.appendChild(h1);

const cards = [
  {
    imgSrc: "assets/aquamarine.jpeg",
    name: "aquamarine",
    alt: "aquamarine crystal",
    "data-framework": "Aquamarine",
  },
  {
    imgSrc: "assets/aquamarine.jpeg",
    name: "aquamarine",
    alt: "aquamarine crystal",
    "data-framework": "Aquamarine",
  },
  {
    imgSrc: "assets/artist.jpeg",
    name: "artist",
    alt: "artist",
    "data-framework": "Artist",
  },
  {
    imgSrc: "assets/artist.jpeg",
    name: "artist",
    alt: "artist",
    "data-framework": "Artist",
  },
  {
    imgSrc: "assets/rainbow.jpeg",
    name: "rainbow concert",
    alt: "rainbow concert",
    "data-framework": "Rainbow",
  },
  {
    imgSrc: "assets/rainbow.jpeg",
    name: "rainbow concert",
    alt: "rainbow concert",
    "data-framework": "Rainbow",
  },
  {
    imgSrc: "assets/vinyl.jpeg",
    name: "vinyl",
    alt: "a record playing, photographed from above",
    "data-framework": "Vinyl",
  },
  {
    imgSrc: "assets/vinyl.jpeg",
    name: "vinyl",
    alt: "a record playing, photographed from above",
    "data-framework": "Vinyl",
  },
  {
    imgSrc: "assets/bee.jpeg",
    name: "bee",
    alt: "a bee pollinating a flower",
    "data-framework": "Bee",
  },
  {
    imgSrc: "assets/bee.jpeg",
    name: "bee",
    alt: "a bee pollinating a flower",
    "data-framework": "Bee",
  },
  {
    imgSrc: "assets/lights.jpeg",
    name: "lights",
    alt: "Lights",
    "data-framework": "Lights",
  },
  {
    imgSrc: "assets/lights.jpeg",
    name: "lights",
    alt: "Lights",
    "data-framework": "Lights",
  },
  {
    imgSrc: "assets/sea.jpeg",
    name: "sea",
    alt: "Sea Date",
    "data-framework": "Sea",
  },
  {
    imgSrc: "assets/sea.jpeg",
    name: "sea",
    alt: "Sea Date",
    "data-framework": "Sea",
  },
  {
    imgSrc: "assets/trees.jpeg",
    name: "trees",
    alt: "moody trees",
    "data-framework": "Trees",
  },
  {
    imgSrc: "assets/trees.jpeg",
    name: "trees",
    alt: "moody trees",
    "data-framework": "Trees",
  },
  {
    imgSrc: "assets/cactus.jpeg",
    name: "cactus",
    alt: "Cactus and moon",
    "data-framework": "Cactus",
  },
  {
    imgSrc: "assets/cactus.jpeg",
    name: "cactus",
    alt: "Cactus and moon",
    "data-framework": "Cactus",
  },
  {
    imgSrc: "assets/eclipse.jpeg",
    name: "eclipse",
    alt: "solar eclipse",
    "data-framework": "Eclipse",
  },
  {
    imgSrc: "assets/eclipse.jpeg",
    name: "eclipse",
    alt: "solar eclipse",
    "data-framework": "Eclipse",
  },
  {
    imgSrc: "assets/velveteen.jpeg",
    name: "velveteen",
    alt: "soft",
    "data-framework": "Velveteen",
  },
  {
    imgSrc: "assets/velveteen.jpeg",
    name: "velveteen",
    alt: "soft",
    "data-framework": "Velveteen",
  },
  {
    imgSrc: "assets/flower.jpeg",
    name: "flower",
    alt: "a pretty flower, close up",
    "data-framework": "flower",
  },
  {
    imgSrc: "assets/flower.jpeg",
    name: "flower",
    alt: "a pretty flower, close up",
    "data-framework": "flower",
  },
];

// Create a new array to store the flipped cards
let flippedCards = [];

for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[j]] = [cards[j], cards[i]];
}

for (let i = 0; i < cards.length; i++) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("memory-card");
  cardDiv.setAttribute("data-framework", cards[i]["data-framework"]);
  cardDiv.innerHTML = `
  <img class="front-face" src="${cards[i].imgSrc}" alt="${cards[i].alt}">
  <img class="back-face" src="assets/pearTree.jpeg" alt="card back">
  `;

  // Add event listener to flip the card on click
  cardDiv.addEventListener("click", function () {
    cardDiv.classList.toggle("flip");

    // Add the data-framework value of the flipped card to the array
    flippedCards.push(cardDiv.getAttribute("data-framework"));

    // Check for a match if two cards have been flipped
    if (flippedCards.length === 2) {
      if (flippedCards[0] === flippedCards[1]) {
        // The cards match
        console.log("Match!");
      } else {
        // The cards do not match
        console.log("No match.");
      }

      // Clear the array for the next pair of flipped cards
      flippedCards = [];
    }
  });

  section.appendChild(cardDiv);
}

document.body.appendChild(section);
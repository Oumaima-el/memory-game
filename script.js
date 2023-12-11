let boardBody = document.getElementById("board-body");

let state = {
  cards: [],
  boardSize: 0,
  scoreBoard: { moves: 0, matches: 0, misses: 0, score: 0 },
  flippedCards: [],
  foundCards: [],
};

function restart() {
  let winnerModalContainer = document.getElementById("winner-modal-container");
  winnerModalContainer.style.display = "none";
  let startGameModalContainer = document.getElementById(
    "start-game-modal-container"
  );
  startGameModalContainer.style.display = "flex";
}

function clearBoard() {
  state = {
    cards: [],
    boardSize: 0,
    scoreBoard: { moves: 0, matches: 0, misses: 0, score: 0 },
    flippedCards: [],
    foundCards: [],
  };
  updateData();
  boardBody.innerHTML = "";
  let startGameModalContainer = document.getElementById(
    "start-game-modal-container"
  );
  startGameModalContainer.style.display = "none";
}

function createBoard(size) {
  clearBoard();

  //create imageIds array and push ids
  let imageIds = [];
  for (let i = 1; i <= (size * size) / 2; i++) {
    imageIds.push(i + 1);
    imageIds.push(i + 1);
  }

  //shuffle the array
  suffleCards(imageIds);
  state.boardSize = size;
  let count = 1;
  for (let i = 0; i < size; i++) {
    let subContainer = document.createElement("div");
    subContainer.className = "sub-container";
    for (let j = 0; j < size; j++) {
      subContainer.innerHTML += `<div class="card" id=${count} onClick="flipCard(${count},${
        imageIds[count - 1]
      })"></div>`;
      state.cards.push({
        cardId: count,
        imageId: count - 1,
        isFlipped: false,
      });
      count++;
    }
    boardBody.appendChild(subContainer);
  }
}

createBoard(4);

function flipCard(cardId, imageId) {
  let card = document.getElementById(cardId);

  if (state.flippedCards.length < 2) {
    card.style.backgroundImage = `url(images/${imageId}.jpg)`;
    state.cards.find((card) => card.cardId === cardId).isFlipped = true;
    state.flippedCards.push({ cardId, imageId });
  } else if (state.flippedCards.length === 2) {
    if (state.flippedCards[0].imageId === state.flippedCards[1].imageId) {
      state.foundCards.push(state.flippedCards[0].cardId);
      state.foundCards.push(state.flippedCards[1].cardId);
      state.scoreBoard.matches++;
      updateData();
      winner();
    } else {
      unflipCard(state.flippedCards[0].cardId);
      unflipCard(state.flippedCards[1].cardId);
      state.scoreBoard.misses++;
      updateData();
    }
    state.flippedCards = [];
    state.scoreBoard.moves++;
    updateData();
  }
}

function unflipCard(cardId) {
  let card = document.getElementById(cardId);
  card.style.backgroundImage = "url(images/brain.jpg)";
  state.cards.find((card) => card.cardId === cardId).isFlipped = false;
}
function suffleCards(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (array.length - 1) + 1);
    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
}

function updateData() {
  let moves = document.getElementById("moves");
  let matches = document.getElementById("matches");
  let misses = document.getElementById("misses");
  let score = document.getElementById("score");

  moves.innerHTML = "Moves : " + state.scoreBoard.moves;
  matches.innerHTML = "Matches : " + state.scoreBoard.matches;
  misses.innerHTML = "Misses : " + state.scoreBoard.misses;
  score.innerHTML = "Score : " + state.scoreBoard.score;
}

function winner() {
  if (state.foundCards.length === state.boardSize * state.boardSize) {
    let winnerModalContainer = document.getElementById(
      "winner-modal-container"
    );
    winnerModalContainer.style.display = "flex";
    state.scoreBoard.score =
      state.scoreBoard.matches * 20 -
      state.scoreBoard.misses * 5 -
      state.scoreBoard.moves * 1;
  }
}

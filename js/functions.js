const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const winnerMessage = document.getElementById('winner-message');

let currentPlayer = 'X';
let gameActive = true;
let boardState = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal 1
  [2, 4, 6]  // Diagonal 2
];

// Add the win line element
const winLine = document.createElement('div');
winLine.classList.add('win-line');
board.appendChild(winLine);

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      drawWinLine(combination);
      winnerMessage.textContent = `${currentPlayer} Gana!`;
      gameActive = false;
      return true;
    }
  }
  if (!boardState.includes(null)) {
    winnerMessage.textContent = `Es un empate!`;
    gameActive = false;
    return true;
  }
  return false;
}

function drawWinLine([a, b, c]) {
  const cellA = cells[a].getBoundingClientRect();
  const cellC = cells[c].getBoundingClientRect();

  const boardRect = board.getBoundingClientRect();
  const x1 = cellA.left + cellA.width / 2 - boardRect.left;
  const y1 = cellA.top + cellA.height / 2 - boardRect.top;
  const x2 = cellC.left + cellC.width / 2 - boardRect.left;
  const y2 = cellC.top + cellC.height / 2 - boardRect.top;

  const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

  winLine.style.width = `${length}px`;
  winLine.style.transform = `translate(${x1}px, ${y1}px) rotate(${angle}deg)`;
}

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (!gameActive || boardState[index]) return;

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (!checkWinner()) {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  boardState.fill(null);
  cells.forEach(cell => (cell.textContent = ''));
  winnerMessage.textContent = '';
  currentPlayer = 'X';
  gameActive = true;
  winLine.style.width = '0';
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

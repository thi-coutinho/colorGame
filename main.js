// import './style.css';
const buttons = document.querySelectorAll('.button');
console.log(buttons);
buttons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('cliquei');
    const id = parseInt(button.id.replace('btn', ''));
    toggleColors(id);
  });
});

function toggleColors(id) {
  const neighbors = getNeighbors(id);

  neighbors.forEach(neighbor => {
    const btn = document.getElementById(`btn${neighbor}`);
    btn.classList.toggle('rosa');
  });
}

function getNeighbors(id) {
  const neighbors = {
    1: [1, 2, 4, 5],
    2: [1, 2, 3, 4, 5, 6],
    3: [2, 3, 5, 6],
    4: [1, 2, 4, 5, 7, 8],
    5: [1, 2, 3, 4, 6, 7, 8, 9],
    6: [2, 3, 5, 6, 8, 9],
    7: [4, 5, 7, 8],
    8: [4, 5, 6, 7, 8, 9],
    9: [6, 8, 9]
  };
  return neighbors[id];
}


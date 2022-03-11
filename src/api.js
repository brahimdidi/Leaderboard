const form = document.getElementById('form');

const ul = document.getElementById('ul');
const refreshBtn = document.querySelector('.refresh');

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const createGame = () => {
  fetch(`${apiUrl}/games`, {
    method: 'Post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'bamo',
    }),
  });
};

const gameId = 'axmeYdCwAotArdTkTlSX';
const url = `${apiUrl}/games/${gameId}/scores/`;
const postData = async () => {
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  await fetch(`${url}`, {
    method: 'Post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
  });
};

const getData = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();
  return data.result;
};

const display = async () => {
  ul.innerHTML = '';
  const data = await getData();
  const myList = data.map((item) => {
    const listItems = `<li class="name-score"><span class="ns-text">${item.user}: ${item.score}</span></li>`;
    return listItems;
  });
  ul.innerHTML = myList.join('');
};

document.addEventListener('DOMContentLoaded', () => {
  refreshBtn.addEventListener('click', async () => {
    display();
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postData()
    .then(() => display());
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

display();

export default createGame;
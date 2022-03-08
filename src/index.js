import './style.css';

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const scoreList = document.querySelector('.score-list');

const list = [];

localStorage.setItem('list', JSON.stringify(list));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;

  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerHTML = `<li class="name-score">${name}: ${score}</li>`;
  scoreList.appendChild(ul);
  ul.appendChild(li);
  const obj = { Name: name, Score: score };
  list.push(obj);

  nameInput.value = '';
  scoreInput.value = '';
  localStorage.setItem('list', JSON.stringify(list));
});
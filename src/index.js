import './style.css';

const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const scoreList = document.querySelector('.score-list');
const ul = document.getElementById('ul');
const list = [];

localStorage.setItem('list', JSON.stringify(list));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;

  
  const li = document.createElement('li');
  li.innerHTML = `<li class="name-score"><span>${name}: ${score} <span></li>`;
  li.classList.add('name-score');
  ul.appendChild(li);
  const obj = { Name: name, Score: score };
  list.push(obj);

  nameInput.value = '';
  scoreInput.value = '';
  localStorage.setItem('list', JSON.stringify(list));
});
import"./style.css";const form=document.getElementById("form"),nameInput=document.getElementById("name"),scoreInput=document.getElementById("score"),ul=document.getElementById("ul"),list=[];localStorage.setItem("list",JSON.stringify(list)),form.addEventListener("submit",(e=>{e.preventDefault();const t=nameInput.value,n=scoreInput.value,s=document.createElement("li");s.innerHTML=`<li class="name-score"><span>${t}: ${n} <span></li>`,s.classList.add("name-score"),ul.appendChild(s);const l={Name:t,Score:n};list.push(l),nameInput.value="",scoreInput.value="",localStorage.setItem("list",JSON.stringify(list))}));
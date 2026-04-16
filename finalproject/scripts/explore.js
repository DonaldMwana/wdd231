import { showModal } from './modal.js';
import { saveFavorite } from './storage.js';

let places = [];

const container = document.querySelector('#places');
const search = document.querySelector('#search');

function render(data) {
container.innerHTML = '';

data.forEach(p => {
const card = document.createElement('div');
card.className = 'card';

card.innerHTML = `
<img src="${p.image}" alt="${p.name}" loading="lazy">
<div class="card-body">
<h3>${p.name}</h3>
<p>${p.location}</p>
<span class="tag">${p.category}</span>
<button class="details">Details</button>
<button class="save">❤</button>
</div>
`;

card.querySelector('.details').onclick = () => showModal(p);
card.querySelector('.save').onclick = () => saveFavorite(p);

container.appendChild(card);
});
}

async function load() {
const res = await fetch('../data/places.json');
places = await res.json();
render(places);
}

search?.addEventListener('input', e => {
const value = e.target.value.toLowerCase();
render(places.filter(p => p.name.toLowerCase().includes(value)));
});

document.querySelectorAll('.filters button').forEach(btn => {
btn.addEventListener('click', () => {
const cat = btn.dataset.cat;
render(cat === 'All' ? places : places.filter(p => p.category === cat));
});
});

load();
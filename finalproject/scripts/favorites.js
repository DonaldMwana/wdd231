const container = document.querySelector('#favorites');

const favs = JSON.parse(localStorage.getItem('favs')) || [];

if (!favs.length) {
container.innerHTML = "<p>No favorites yet.</p>";
}

favs.forEach(p => {
const card = document.createElement('div');
card.className = 'card';

card.innerHTML = `
<img src="${p.image}" alt="${p.name}">
<div class="card-body">
<h3>${p.name}</h3>
<p>${p.location}</p>
</div>
`;

container.appendChild(card);
});
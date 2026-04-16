export function showModal(place) {
const modal = document.querySelector('#modal');

modal.innerHTML = `
<h2>${place.name}</h2>
<p>${place.location}</p>
<p>${place.category}</p>
<button onclick="modal.close()">Close</button>
`;

modal.showModal();
}
const url = "data/members.json";

async function getSpotlights(){

const response = await fetch(url);
const data = await response.json();

const members = data.members.filter(
m => m.membership === "Gold" || m.membership === "Silver"
);

const shuffled = members.sort(() => 0.5 - Math.random());

const selected = shuffled.slice(0,3);

const container =
document.getElementById("spotlight-container");

selected.forEach(member => {

const card = document.createElement("div");
card.classList.add("spotlight-card");

card.innerHTML = `
<h3>${member.name}</h3>
<img src="${member.logo}" alt="${member.name} logo">
<p>${member.phone}</p>
<p>${member.address}</p>
<a href="${member.website}" target="_blank">Visit Website</a>
<p>${member.membership} Member</p>
`;

container.appendChild(card);
});
}

getSpotlights();
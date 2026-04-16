export function saveFavorite(place) {
let favs = JSON.parse(localStorage.getItem('favs')) || [];
favs.push(place);
localStorage.setItem('favs', JSON.stringify(favs));
}
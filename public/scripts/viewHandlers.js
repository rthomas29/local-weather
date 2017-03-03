const searchButton = document.getElementById('advSearch');
const searchDiv = document.getElementById('search-form');
let showDiv = false;

document.addEventListener('DOMContentLoaded', () => {
  searchDiv.style.display = 'none';
  searchButton.addEventListener('click', () => {
    if (showDiv === false) {
      showDiv = !showDiv;
      $('#search-form').show('slow');
    } else if (showDiv === true) {
      showDiv = !showDiv;
      $('#search-form').hide('slow');
    }
  });
});

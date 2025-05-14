const darkModeButton = document.getElementById('theme');
const body = document.body;

darkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

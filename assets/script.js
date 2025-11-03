const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') enableDarkMode();

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.add('dark-mode');
  navbar.classList.add('dark-mode');
  footer.classList.add('dark-mode');
  toggleBtn.textContent = 'Light Mode';
  localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  navbar.classList.remove('dark-mode');
  footer.classList.remove('dark-mode');
  toggleBtn.textContent = 'Dark Mode';
  localStorage.setItem('theme', 'light');
}

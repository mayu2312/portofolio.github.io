
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('darkMode');
    } else {
      body.classList.remove('darkMode');
    }
  });
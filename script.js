<<<<<<< HEAD
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('darkMode');
    } else {
      body.classList.remove('darkMode');
    }
=======
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (this.checked) {
      body.classList.add('darkMode');
    } else {
      body.classList.remove('darkMode');
    }
>>>>>>> 0b409b34cb4d31bc33b5e2698b133f0203821dad
  });
let theme = document.getElementById('theme');
theme.addEventListener('click', function() {
    document.body.classList.toggle("darkmode");
    document.body.ul.classList.toggle("list-darkmode");
})
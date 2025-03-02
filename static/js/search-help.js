
// Help toggle for search commands
const helpToggle = document.getElementById('help-toggle');
const searchCommands = document.getElementById('search-commands');

helpToggle.addEventListener('click', function () {
    searchCommands.classList.toggle('visible');
});

// Hide search commands when clicking elsewhere
document.addEventListener('click', function (e) {
    if (!searchCommands.contains(e.target) && e.target !== helpToggle) {
        searchCommands.classList.remove('visible');
    }
});

// Show search commands when typing -h in the search box
const searchBox = document.getElementById('searchbox');

searchBox.addEventListener('input', function () {
    if (this.value === '-h') {
        searchCommands.classList.add('visible');
    }
});
/* script.js*/

document.addEventListener('DOMContentLoaded', function () {
    const dateInput = document.getElementById('postDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    scrollToPost(); // Scroll to today’s post on load
});

function scrollToPost() {
    const selectElement = document.getElementById('postDate');
    const selectedDate = selectElement.value;

    if (selectedDate) {
        const post = document.getElementById(selectedDate);
        if (post) {
            post.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
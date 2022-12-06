// Website with Dark Mode switch
const darkModeBtn = document.getElementById('darkModeBtn');
const textBtn = document.getElementById('textBtn');
const myBody = document.body;
const imgs = document.querySelectorAll('img');

darkModeBtn.addEventListener('click', e => {
    if (e.target.checked) {
        myBody.style.filter = 'invert(100)';
        imgs.forEach(img => img.style.filter = 'invert(100)');
        textBtn.innerHTML = 'Light Mode';
    } else {
        myBody.style.filter = 'invert(0)';
        imgs.forEach(img => img.style.filter = 'invert(0)');
        textBtn.innerHTML = 'Dark Mode';
    }
    if (!myBody.classList.contains('animate')) {
        myBody.classList.toggle('animate');
        setTimeout(() => myBody.classList.remove('animate'), 1000);
    }
});
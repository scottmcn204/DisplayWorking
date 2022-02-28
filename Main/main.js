const menuBtn = document.querySelector('.menuBtn')
const sidebar = document.querySelector('.sidebar')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        document.getElementById('sidebar').style.display = "fixed";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        document.getElementById('sidebar').style .display = "none";
        menuOpen = false;
    }
});
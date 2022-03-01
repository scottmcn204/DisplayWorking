const menuBtn = document.querySelector('.menuBtn')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.querySelector('.sidebar').classList.add('open')
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.querySelector('.sidebar').classList.remove('open')
    }
});
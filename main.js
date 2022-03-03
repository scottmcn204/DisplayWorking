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

const loginForm = document.querySelector('login-form')
const loginButton = document.querySelector('login-form-submit')
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if(username === 'admin' && password === 'admin'){
        alert("You have logged in!");
        window.location.replace('Data.html');
    }
    else{
        alert("Incorrect Password");
    }
});
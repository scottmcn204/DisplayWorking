const menuBtn = document.querySelector('.menuBtn')
let menuOpen = false;
// if menu button is clicked, change menu to open in Css
//also change screen dim to open
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        document.querySelector('.sidebar').classList.add('open')
        document.querySelector('.dim').classList.add('open')
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        document.querySelector('.sidebar').classList.remove('open')
        document.querySelector('.dim').classList.remove('open')
    }
});

const loginForm = document.querySelector('#login-form')
const loginButton = document.querySelector('#login-form-submit')
//if inputed name is admin and inputed password is admin1
//then change the web page to user data page
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === 'admin' && password === 'admin1'){
        alert("You have logged in!");
        window.location.replace('Data.html');
    }
    else{
        alert("Incorrect Password");
    }
})

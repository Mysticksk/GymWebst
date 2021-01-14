const nav = document.querySelector('.navigation');
const burger = document.querySelector('.burger');
const burgerIco = document.querySelector('.fa-bars')
const closeIco = document.querySelector('.fa-times');
const login = document.querySelector('.login-Input');
const loginForm = document.querySelector('.login')
const loginButton = document.querySelectorAll('.btn')
const loginCloseButton = document.querySelector('.login__close')

burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        burgerIco.classList.add('hide');
        closeIco.classList.remove('hide');
    } else {
        burgerIco.classList.remove('hide');
        closeIco.classList.add('hide');
    }
});

login.addEventListener('click', function () {
    login.classList.toggle('login-active');
    if (login.classList.contains('login-active')) {
        loginForm.classList.remove('hide');
    } else {
        loginForm.classList.add('hide');
    }
});

loginCloseButton.addEventListener('click', function () {

    login.classList.toggle('login-active');
    if (login.classList.contains('login-active')) {
        loginForm.classList.remove('hide');
    } else {
        loginForm.classList.add('hide');
    }
});


Array.from(loginButton).forEach(function (btn) {
    btn.addEventListener('click', function () {
        login.classList.toggle('login-active');

    if (login.classList.contains('login-active')) {
        loginForm.classList.remove('hide');
    } else {
        loginForm.classList.add('hide');
    }
    });
});

// buttons.forEach(button => button.addEventListener("click", alterDisplayValue(button)));

// loginButton.addEventListener('click', function () {
//     login.classList.toggle('login-active');

    

//     if (login.classList.contains('login-active')) {
//         loginForm.classList.remove('hide');
//     } else {
//         loginForm.classList.add('hide');
//     }
// });

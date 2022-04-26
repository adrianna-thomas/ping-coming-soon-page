const form = document.querySelector('.form');
const email = document.querySelector('.email');
const emailValue = email.value;
const errorText = document.querySelector('.error-text');

form.addEventListener('submit', (e) => {
    console.log(email.parentElement);
    e.preventDefault();
    if (!email.value) {
        //Say "Whoops! It looks like you forgot to add your email" 
        email.parentElement.classList.toggle('error');
        // errorText.innerText = 'Whoops! It looks like you forgot to add your email';

    } else if (!validateEmail(emailValue)) {
        //say it's invalid
        email.parentElement.classList.toggle('error');
        errorText.innerText = 'Email is invalid!'
    } else {
        //submit
        email.classList.remove('error');
        errorText = '';
        errorText.style.display = 'none';

    }
});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
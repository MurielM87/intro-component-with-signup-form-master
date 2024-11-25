function validateForm() {
    let isValid = true;

    // Récupération des éléments du formulaire
    const firstname = document.getElementById('first_name');
    const lastname = document.getElementById('last_name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Récupération des images d'erreur et des messages d'erreur
    const firstnameErrorImg = firstname.nextElementSibling;
    const lastnameErrorImg = lastname.nextElementSibling;
    const emailErrorImg = email.nextElementSibling;
    const passwordErrorImg = password.nextElementSibling;
    
    const firstnameError = document.getElementById('firstname-error');
    const lastnameError = document.getElementById('lastname-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Réinitialisation des messages, des bordures et des images d'erreur
    [firstname, lastname, email, password].forEach(input => input.classList.remove('error-border'));
    [firstnameError, lastnameError, emailError, passwordError].forEach(error => error.innerText = '');
    [firstnameErrorImg, lastnameErrorImg, emailErrorImg, passwordErrorImg].forEach(img => img.style.display = "none");

    // Validation du prénom
    if (firstname.value.trim() === '') {
        firstnameError.innerText = 'First Name cannot be empty';
        firstname.classList.add('error-border');
        firstnameErrorImg.style.display = "block";
        isValid = false;
    }

    // Validation du nom de famille
    if (lastname.value.trim() === '') {
        lastnameError.innerText = 'Last Name cannot be empty';
        lastname.classList.add('error-border');
        lastnameErrorImg.style.display = "block";
        isValid = false;
    }

    // Validation de l'email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.value.trim() === '') {
        emailError.innerText = 'Email cannot be empty';
        email.classList.add('error-border');
        emailErrorImg.style.display = "block";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        emailError.innerText = 'Looks like this is not an email';
        email.classList.add('error-border');
        emailErrorImg.style.display = "block";
        isValid = false;
    }

    // Validation du mot de passe
    if (password.value.trim() === '') {
        passwordError.innerText = 'Password cannot be empty';
        password.classList.add('error-border');
        passwordErrorImg.style.display = "block";
        isValid = false;
    }

    return isValid; 
}
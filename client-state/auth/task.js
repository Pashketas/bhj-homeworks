const form = document.forms.signin__form;
const logField = form.login;
const passField = form.password;
const welcomeDiv = document.getElementById('welcome');
const userId = welcomeDiv.querySelector('#user_id');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData(form);
        
    xhr.send(formData);
    
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            const result = JSON.parse(xhr.response);
            if (result.success) {
                form.closest('.signin').classList.remove('signin_active');
                localStorage.setItem('id', result.user_id);
                welcomeDiv.classList.add('welcome_active');
                userId.textContent = localStorage.id;
            } else {
                alert('Неверный логин/пароль');
                logField.value = '';
                passField.value = '';
            }
        }
    });
    
});
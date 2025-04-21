let formData = { email: '', message: '' };

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

input.value =
    JSON.parse(localStorage.getItem('feedback-form-state')) !== null
        ? JSON.parse(localStorage.getItem('feedback-form-state'))['email']
        : '';
textarea.value =
    JSON.parse(localStorage.getItem('feedback-form-state')) !== null
        ? JSON.parse(localStorage.getItem('feedback-form-state'))['message']
        : '';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
});

form.addEventListener('submit', handler);

function handler() {
    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
    } else {
        console.log(formData);
        formData = { email: '', message: '' };
        localStorage.clear();
        form.reset();
    }
}
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const saveFormState = throttle(() => {
    const formState = {
        mail: email.value,
        mess: message.value,
    };

    try {
        localStorage.setItem('feedback-form-state', JSON.stringify(formState));
    } catch (error) {
        console.error('Помилка при збереженні стану форми:', error);
    }
}, 500);

const restoreFormState = () => {
    try {
        const savedState = localStorage.getItem('feedback-form-state');

        if (savedState !== null) {
            const { mail, mess } = JSON.parse(savedState);
            email.value = mail;
            message.value = mess;
        }
    } catch (error) {
        console.error('Помилка при відновленні стану форми:', error);
    }
};

form.addEventListener('input', saveFormState);

restoreFormState();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (email.value === '' || message.value === '') {
        alert("Заповніть всі поля!");
    } else {
        console.log({
            mail: email.value,
            mess: message.value,
        });

        localStorage.removeItem('feedback-form-state');

        email.value = '';
        message.value = '';
    }
});

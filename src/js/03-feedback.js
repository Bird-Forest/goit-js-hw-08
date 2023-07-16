import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
console.dir(form);

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

let userStoreage = {};

function onInput() {
      let { email, message } = form.elements; 
      userStoreage = {
            email: email.value,
            message: message.value,
      };
      localStorage.setItem("feedback-form-state", JSON.stringify(userStoreage));
};

function updatePage() {
      userStoreage = JSON.parse(localStorage.getItem("feedback-form-state"));
      if (userStoreage === null) {
            return
      }
      form.querySelector('input').value = userStoreage.email;    
      form.querySelector('textarea').value = userStoreage.message;
}
updatePage();

function onSubmit(evt) {
      evt.preventDefault()
      let { email, message } = form.elements;
      userStoreage = {
            email: email.value,
            message: message.value,
      };
      if (form.email.value === '' || form.message.value === '') {
      return alert('Please fill in all fields')
      }; 
      console.dir(userStoreage);
      form.reset();
      localStorage.removeItem("feedback-form-state");
};
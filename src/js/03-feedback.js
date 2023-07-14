import throttle from 'lodash.throttle';

const formUser = document.querySelector('.feedback-form')
console.dir(formUser);
formUser.addEventListener('submit', throttle(onSubmit, 500));

function updatePage() {
  localStorage.removeItem("feedback-form-state");
};
updatePage();

function onSubmit(evt) {
  evt.preventDefault()
  const { email, message } = evt.currentTarget.elements
  const user = {
        email: email.value,
        message: message.value,
        }
  console.dir(user);
  
  localStorage.setItem("feedback-form-state", JSON.stringify(user));
  
  formUser.reset();
}














// function updatePage() {
//   if (localStorage.getItem("feedback-form-state") ?? {}) {
//     return
//   }
  
//   localStorage.getItem("feedback-form-state", JSON.parse(user));
//   console.dir(localStorage.getItem("feedback-form-state", JSON.parse(user)))
//    localStorage.removeItem("feedback-form-state");
// }
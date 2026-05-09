const togglePassword =
document.getElementById('togglePassword');

const password =
document.getElementById('password');

const loginForm =
document.getElementById('loginForm');

togglePassword.addEventListener('click',()=>{

const type =
password.getAttribute('type') === 'password'
? 'text'
: 'password';

password.setAttribute('type',type);

togglePassword.innerHTML =
type === 'password'
? '<i class="bi bi-eye-slash"></i>'
: '<i class="bi bi-eye"></i>';

});

loginForm.addEventListener('submit',(e)=>{

e.preventDefault();

const email =
document.getElementById('email').value.trim();

const passwordValue =
password.value.trim();

if(email === '' || passwordValue === ''){

alert('Please fill all fields');

return;

}

if(passwordValue.length < 8){

alert('Password must contain minimum 8 characters');

return;

}

alert('Login Successful!');

});
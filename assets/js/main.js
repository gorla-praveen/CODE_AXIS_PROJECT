const togglePassword =
document.getElementById('togglePassword');

const password =
document.getElementById('password');

const loginForm =
document.getElementById('loginForm');

const loginError =
document.getElementById('loginError');

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

loginError.style.display = "none";

const email =
document.getElementById('email').value.trim();

const passwordValue =
password.value.trim();

if(email === '' || passwordValue === ''){

loginError.style.display = "block";

loginError.innerHTML =
"Please fill all fields";

return;

}

if(passwordValue.length < 8){

loginError.style.display = "block";

loginError.innerHTML =
"Password must contain minimum 8 characters";

return;

}

document
.getElementById("loginLoader")
.classList.remove("d-none");

document
.getElementById("loginText")
.innerHTML = "Logging in...";

setTimeout(()=>{

document
.getElementById("loginLoader")
.classList.add("d-none");

document
.getElementById("loginText")
.innerHTML = "Login Securely";

Swal.fire({
icon:'success',
title:'Login Successful',
text:'Welcome back to Code Axis',
confirmButtonColor:'#4F46E5'
});

loginForm.reset();

},1500);

});
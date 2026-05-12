const togglePassword = document.getElementById("togglePassword");
  const password = document.getElementById("password");

  togglePassword.addEventListener("click", function(){

    const type = password.getAttribute("type") === "password" 
      ? "text" 
      : "password";

    password.setAttribute("type", type);

    this.innerHTML = type === "password"
      ? '<i class="bi bi-eye-slash"></i>'
      : '<i class="bi bi-eye"></i>';

  });

  // FORM VALIDATION

  const loginForm = document.getElementById("loginForm");
  const passwordError = document.getElementById("passwordError");

  loginForm.addEventListener("submit", function(e){

    if(password.value.length < 8){

      e.preventDefault();
      passwordError.style.display = "block";

    } else {

      passwordError.style.display = "none";

      alert("Login Successful!");

    }
    

  });
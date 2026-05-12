const materialPassword =
document.getElementById("materialPassword");

const materialToggle =
document.getElementById("materialToggle");

materialToggle.addEventListener("click", () => {

    const type =
    materialPassword.getAttribute("type") === "password"
    ? "text"
    : "password";

    materialPassword.setAttribute("type", type);

    materialToggle.innerHTML =
    type === "password"
    ? '<i class="bi bi-eye-slash"></i>'
    : '<i class="bi bi-eye"></i>';

});
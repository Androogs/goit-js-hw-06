const submitButton = document.querySelector("button");
const formInput = document.getElementsByClassName("login-form");
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

document.querySelector(".login-form").setAttribute("id", "form");

const formObject = submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (formInput[0][0].value === "" || formInput[0][1].value === "") {
    alert("Advertencia: Debe rellenar todos los espacios");
  } else {
    const validateEmail = String(formInput[0][0].value).toLowerCase().match(re);
    if (validateEmail !== null) {
      const obj = {
        email: formInput[0][0].value,
        password: formInput[0][1].value,
      };
      console.log(obj);
      document.getElementById("form").reset();
      return obj;
    }
    alert(
      "Error: El campo de correo electrónico no está diligenciado de manera correcta. Ejemplo: mail@mail.com"
    );
  }
});

import { ManageAccount } from '/js/auth/firebaseAuth.js';

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("loginName").value;
  const password = document.getElementById("loginPassword").value;

  const account = new ManageAccount();
  account.authenticate(email, password);
  
});

console.log('Formulario de Inicio de Sesión');

document.getElementById("form-create-account").addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const name = document.getElementById("registerName").value;
  const lastname = document.getElementById("registerUsername").value;
  const confirmPassword = document.getElementById("registerRepeatPassword").value;

  const account = new ManageAccount();
  account.register(email, password, confirmPassword, name, lastname);

});

console.log('Formulario de Registro');

document.getElementById("logoutButton").addEventListener("click", (event) =>{
  const account = new ManageAccount();
  account.logOut();
})


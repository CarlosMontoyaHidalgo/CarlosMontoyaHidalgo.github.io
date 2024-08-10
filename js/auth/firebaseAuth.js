import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "../firebaseIntegration.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from "../firebaseIntegration.js";

function validateEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email).toLowerCase());
}

export class ManageAccount {
    async register(email, password, confirmPassword, name, lastname) {
      if(!validateEmail(email)){alert("Por favor, introduce un email. Ejemplo: user@gmail.com"); return;}
      if(password.length === 0){alert("Por favor, introduce una contraseña."); return;}
      if(password !== confirmPassword){alert("Las contraseñas no coinciden");return;}
      if(name.length === 0){alert("Por favor, introduce un nombre");return;}
      if(lastname.length === 0){alert("Por favor, introduce un apellido");return;}
      

      try {
        // Registrar al usuario
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Guardar nombre y apellido en Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          lastname: lastname,
          email: email
        });
  
        // Redirigir al usuario después del registro exitoso
        window.location.href = "/html/login.html";
        alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
      } catch (error) {
        console.error('Error al registrar:', error.message);
        alert("Error al registrar: " + error.message);
      }
    }
      /* createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "/html/login.html";
          // Mostrar alerta de registro exitoso
          alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        })
        .catch((error) => {
          console.error(error.message);
              // Mostrar alerta de error de registro
              alert("Error al registrar: " + error.message);
        }); 
    }*/
/************************************************************/
    authenticate(email, password) {
      if(!validateEmail(email)){alert("Por favor, introduce un email. Ejemplo: user@gmail.com"); return;}
      if(password.length === 0){alert("Por favor, introduce una contraseña."); return;}
      signInWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "/html/index.html";
          // Mostrar alerta de inicio de sesión exitoso
          alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        })
        .catch((error) => {
          console.error(error.message);
                  // Mostrar alerta de error de inicio de sesión
                  alert("Error al iniciar sesión: " + error.message);
        });
    }
/************************************************************/
    logOut() {
      signOut(auth)
        .then((_) => {
          window.location.href = "/../index.html";
        })
        .catch((error) => {
          console.error("Error al cerrar sesión", error.message);
        });
    }

    /********************************************************** */
  }

/*   const logout = () => {
    sessionStorage.removeItem('token')
    window.location = '/index.html'
  }

  const logoutButton = document.querySelector("#logoutButton")
  logoutButton.addEventListener('click', logout) */
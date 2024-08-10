import { signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "../firebaseIntegration.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { db } from "../firebaseIntegration.js";

export class ManageAccount {
    async login(email, password) {
        try {
            // Autenticar al usuario
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Recuperar información del usuario desde Firestore
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                // Mostrar la información del usuario
                document.getElementById('userInfo').innerText = `Bienvenido, ${userData.name} ${userData.lastname}`;
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error.message);
            alert("Error al iniciar sesión: " + error.message);
        }
    }

    async logout() {
        try {
            await signOut(auth);
            alert("Sesión cerrada exitosamente.");
            document.getElementById('userInfo').innerText = '';
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
            alert("Error al cerrar sesión: " + error.message);
        }
    }
}

// Ejemplo de uso
const manageAccount = new ManageAccount();
document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    manageAccount.login(email, password);
});

document.getElementById('logoutButton').addEventListener('click', () => {
    manageAccount.logout();
});

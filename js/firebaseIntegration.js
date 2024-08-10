import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAenyNMGGDFfzBauqoxOMhgXeYsi4yKtdc",
  authDomain: "github-carlosmontoya.firebaseapp.com",
  projectId: "github-carlosmontoya",
  storageBucket: "github-carlosmontoya.appspot.com",
  messagingSenderId: "145209643040",
  appId: "1:145209643040:web:7a1d0f695560a2f4f9ac45",
  measurementId: "G-V4K988RK5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {auth};
export {db};
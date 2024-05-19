import { db } from "./firebaseIntegration.js";
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js';

// Función para obtener y mostrar libros desde Firestore
async function obtenerYMostrarLibros() {
    const elementoDatos = document.getElementById('books-list');
    if (elementoDatos) {
        try {
            const librosCollection = collection(db, 'books');
            const snapshot = await getDocs(librosCollection);
            
            let contenido = '';
            snapshot.forEach(doc => {
                const libro = doc.data();
                const name = libro.name || 'Sin título';
                const author = libro.author || 'Desconocido';
                contenido += `<p>Libro: ${name}, Autor: ${author}</p>`;
            }); 
            elementoDatos.innerHTML = contenido;
        } catch (error) {
            console.error('Error al obtener y mostrar libros:', error);
        }
    }
}

// Función para obtener y mostrar tecnologías desde Firestore
async function obtenerYMostrarTecnologias() {
    const techList = document.getElementById('tech-list');
    if (techList) {
        try {
            const fetchCollection = collection(db, 'tecnologies');
            const snapshot = await getDocs(fetchCollection);
            techList.innerHTML = "";
            snapshot.forEach(doc => {
                const tech = doc.data();
                const name = tech.name || 'Sin título';
                const imageurl = tech.imageurl || '';
                const link = tech.link || 'Link Error';
                const description = tech.description || '';
                const cardCol = document.createElement('div');
                cardCol.className = 'col-6 col-md-4 mb-4';
                cardCol.innerHTML = `
    <a href="${link}" class="text-decoration-none">
        <div class="card shadow-sm h-100">
            <div class="d-flex justify-content-center align-items-center" style="height: 100%;">
                <img src="${imageurl}" alt="${name}" class="card-img-top img-fluid w-75 mt-4" style="object-fit: cover;">
            </div>
            <div class="card-body d-flex flex-column justify-content-center">
                <div class="card-title">
                    <p class="card-text text-center"><strong>${name}</strong></p>
                </div>
                <div class="card-text">
                    <p>${description}</p>
                </div>
            </div>
        </div>
    </a>            
    
`;

                // Añadir la tarjeta al contenedor
                techList.appendChild(cardCol);
            });
        } catch (error) {
            console.error('Error al obtener y mostrar tecnologías:', error);
        }
    }
}

// Función para cargar el contenido del álbum desde album.html
async function cargarAlbum() {
    const albumContainer = document.getElementById('album');
    if (albumContainer) {
        try {
            const response = await fetch('/elements/album.html');
            const albumHTML = await response.text();
            albumContainer.innerHTML = albumHTML;
        } catch (error) {
            console.error('Error al cargar el álbum:', error);
        }
    }
}

// Llamadas a las funciones para obtener y mostrar datos
obtenerYMostrarLibros();
obtenerYMostrarTecnologias();
cargarAlbum();

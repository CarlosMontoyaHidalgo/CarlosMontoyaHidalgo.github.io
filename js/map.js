// Inicializar el mapa
var map = L.map('map').setView([28.073364, -15.451403], 12); // Coordenadas de Gran Canaria

// Añadir capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir un marcador
L.marker([28.073364, -15.451403]).addTo(map)
    .bindPopup('Universidad de Las Palmas de Gran Canaria.<br> Escuela de Ingenieria Informatica.')
    .openPopup();

// Obtén la referencia al contenedor del carousel
const carouselInner = document.querySelector('.carousel-inner');

// Array de URLs de imágenes locales
const localImageUrls = [
    'resources/image-01.jpg',
    'resources/image-02.jpg',
    'resources/image-03.jpg'
];

// Recorre el array de URLs de imágenes y crea los elementos del carousel
localImageUrls.forEach((imageUrl, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');

    // La primera imagen se marca como activa
    if (index === 0) {
        carouselItem.classList.add('active');
    }

    // Crea el elemento de imagen y asigna la URL
    const image = document.createElement('img');
    image.classList.add('d-block', 'w-100');
    image.src = imageUrl;
    image.alt = `Slide ${index + 1}`;

    // Agrega la imagen al elemento del carousel
    carouselItem.appendChild(image);

    // Agrega el elemento del carousel al contenedor del carousel
    carouselInner.appendChild(carouselItem);
});

function uploadImage(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child("images/" + file.name);

    imageRef.put(file).then(snapshot => {
      console.log("Imagen subida con éxito");
      // Puedes obtener la URL de la imagen subida:
      imageRef.getDownloadURL().then(url => {
        console.log("URL de la imagen:", url);
        // Aquí puedes guardar la URL en tu base de datos si es necesario
      });
    });
}

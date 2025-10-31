// 1. Importamos Express
const express = require('express');

// 2. Creamos una instancia de Express
const app = express();

// 3. Definimos el puerto donde correrá el servidor
const PORT = process.env.PORT || 3000;
// 4. Creamos nuestra "base de datos" (un simple array de objetos)
const dinosaurios = [
    {
        nombre: 'Tiranosaurio Rex',
        especie: 'Tyrannosaurus rex',
        dieta: 'Carnívoro',
        imagen_url: "https://i.postimg.cc/4d7QQqtM/jurasico-t-rex.webp"
    },
    {
        nombre: 'Triceratops',
        especie: 'Triceratops horridus',
        dieta: 'Herbívoro',
        imagen_url: "https://i.postimg.cc/vmyhM3J4/41c45eef870cb7e048d74ac9d341404b-trazo-de-color-de-dinosaurio-triceratops-bebe.webp"
    },
    {
        nombre: 'Velociraptor',
        especie: 'Velociraptor mongoliensis',
        dieta: 'Carnívoro',
        imagen_url: "https://i.postimg.cc/0y0WzTdd/velociraptor-delta.png"
    },
    {
        nombre: 'Estegosaurio',
        especie: 'Stegosaurus armatus',
        dieta: 'Herbívoro',
        imagen_url: "https://i.postimg.cc/FK1yh8PS/estegosaurio-bebe.webp"
    },
    {
        nombre: 'Brontosaurio',
        especie: 'Apatosaurus excelsus',
        dieta: 'Herbívoro',
        imagen_url: "https://i.postimg.cc/3xxpZzQD/free-png.webp"
    }
];

// 5. Definimos el endpoint (ruta) para obtener todos los dinosaurios
// GET /api/dinosaurios
app.get('/api/dinosaurios', (req, res) => {
    res.json(dinosaurios);
});

// 6. Definimos el endpoint para obtener UN dinosaurio por su nombre
// GET /api/dinosaurios/Tiranosaurio
app.get('/api/dinosaurios/:nombre', (req, res) => {
    // Obtenemos el nombre de los parámetros de la URL
    const nombreDino = req.params.nombre;

    // Buscamos el dinosaurio en nuestro array
    // Usamos toLowerCase() para que la búsqueda no distinga mayúsculas/minúsculas
    const dino = dinosaurios.find(d => d.nombre.toLowerCase() === nombreDino.toLowerCase());

    // Si no encontramos el dinosaurio, enviamos un error 404
    if (!dino) {
        return res.status(404).json({ mensaje: 'Dinosaurio no encontrado' });
    }

    // Si lo encontramos, lo enviamos como respuesta
    res.json(dino);
});


// 7. Ponemos el servidor a escuchar en el puerto que definimos
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
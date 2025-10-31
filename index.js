const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

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

app.get('/api/dinosaurios', (req, res) => {
    res.json(dinosaurios);
});

app.get('/api/dinosaurios/:nombre', (req, res) => {
    const nombreDino = req.params.nombre;
    const dino = dinosaurios.find(d => d.nombre.toLowerCase() === nombreDino.toLowerCase());

    if (!dino) {
        return res.status(404).json({ mensaje: 'Dinosaurio no encontrado' });
    }

    res.json(dino);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
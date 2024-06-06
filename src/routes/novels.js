const express = require(`express`);
const novelSchema = require(`../models/novel`);
const router = express.Router();
const upload = require(`../libs/storage`)

// Crear novela

router.post(`/novels`, upload.single(`image`), (req, res) => {
    const novel = novelSchema(req.body)
    
    if(req.file) {
        const{ filename } = req.file
        novel.setImgUrl(filename)
    }

    novel.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

// Listar novela

router.get(`/novels`, (req, res) => {
    novelSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
});

router.get(`/novels/:id`, (req, res) => {
    const novelId = req.params.id

    novelSchema.findById(novelId)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Actualizar novela por ID

router.put(`/novels/:id`, upload.single(`image`), (req, res) => {
    const { id } = req.params;
    const { name, author, genre, publishedYear, pages, language, description, picture } = 
    req.body;

    /* const novel = novelSchema(req.body)

    
    if(req.file) {
        const { filename } = req.file
        novel.setImgUrl(filename)
    } */

    novelSchema
    .updateOne({_id: id}, {$set: {name, author, genre, publishedYear, pages, language, picture}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message:(error)}))

    
});

// Eliminar novela

router.delete(`/novels/:id`, (req, res) => {
    const { id } = req.params;
    novelSchema
    .deleteOne({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: (error)}))
});

module.exports = router;


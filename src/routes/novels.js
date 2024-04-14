const express = require(`express`);
const novelSchema = require(`../models/novel`)
const router = express.Router();

// Crear especie

router.post(`/novels`, (req, res) => {
    const novel = novelSchema(req.body)
    novel
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error}))
});

module.exports = router;
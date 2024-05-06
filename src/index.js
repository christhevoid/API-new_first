const express = require(`express`);
const mongoose = require(`mongoose`);
require(`dotenv`).config();
const rutasNovel = require(`./routes/novels.js`); 

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(`/api`, rutasNovel)

app.use(`/public`, express.static(`${__dirname}/uploads`))

/* NUEVO */
app.use(express.static(`${__dirname}/public`));
/* todos los archivos colocados en public dentro del directorio raíz de mi aplicación
serán accesibles desde el navegador a través de un URL correspondiente */

// RUTAS, ENDPOINTS
app.get(`/`, (req, res) => {
    /* res.send(`Bienvenidos a mi API`) */
    res.sendFile(`${__dirname}/index.html`)
});

// CONEXION MONGODB
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log(`Conected to Database`))
.catch((error) => console.error(error))



app.listen(port , () => console.log(`Server listening at port: `, port));




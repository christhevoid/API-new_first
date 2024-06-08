



// Si viene desde el index --> localStorage
// Si viene de URL --> axios.get()

// Evento de sesión
// Si http://localhost:9000/novel.html?id=6647753d8a797c08d38b0218 --> axios get




document.addEventListener(`DOMContentLoaded`, function() {

    /* var novelInfo = null; */

    // Metodo para obtener la id de una URL

    var url = new URL(window.location.href);
    console.log(url);
    var searchParam = new URLSearchParams(url.search); // creo objeto 
    console.log(searchParam);
    var id = searchParam.get(`id`);
    console.log(id);


    axios.get(`http://localhost:9000/api/novels/${id}`, { responseType:`json` })
    .then(function(res) {
        if(res.status==200) {
            console.log(res);
            var novelInfo = res.data;
            console.log(novelInfo);
            console.log(novelInfo)

            var flag = localStorage.getItem(`flag`);
            console.log(`Flag: ${flag}`);

            var divBack = document.getElementById(`divback`)

            if (flag == `1`) {
                
                divBack.style.display = `block`;
                var backLink = document.createElement(`a`)
                backLink.href = `upload_and_delete.html`;
                backLink.textContent = `Volver al backend`;
                divBack.appendChild(backLink);
            }

            if (flag == null) {
                divBack.style.display = `none`;
            }

            var flag = `0`;
            localStorage.setItem(`flag`, flag);

        var imgContainer = document.getElementById(`img-container`);

        // Creation
        var imgNovel = document.createElement(`img`)
        imgNovel.src = novelInfo.picture;
        imgContainer.appendChild(imgNovel)

        console.log(imgContainer)

        var dataContainer = document.getElementById(`data-container`);

        var title = document.getElementById(`title`)
        title.textContent = novelInfo.name;

        // Nombre
        var name = document.getElementById(`name`);
        name.innerHTML = `<b>Nombre: </b>${novelInfo.name}`;

        // Autor
        var author = document.getElementById(`author`);
        author.innerHTML = `<b>Autor: </b>${novelInfo.author}`

        // Genero
        var genre = document.getElementById(`genre`);
        genre.innerHTML = `<b>Genero: </b>${novelInfo.genre}`

        // Año de publicación
        var pubYear = document.getElementById(`pubYear`);
        pubYear.innerHTML = `<b>Año de publicación: </b>${novelInfo.publishedYear}`;

        // Descripción
        var description = document.getElementById(`description`);
        description.innerHTML = `<b>Descripción: </b>${novelInfo.description}`

        // Paginas
        var pages = document.getElementById(`numPages`);
        pages.innerHTML = `<b>Páginas: </b>${novelInfo.pages}`

        // Idioma
        var language = document.getElementById(`lang`);
        language.innerHTML = `<b>Idioma: </b>${novelInfo.language}`

        var body = document.getElementById(`Q-body1`);
        body.style.backgroundImage = `url(${novelInfo.picture})`

            }
        })
    }

    /* var novelInfo = localStorage.getItem(`novel_data`);
    novelInfo = JSON.parse(novelInfo); */
    
    
)
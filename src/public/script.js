/* const { response } = require("express") */

/* const { response } = require("express"); */

document.addEventListener(`DOMContentLoaded`, () => {
    var flexbox = document.getElementById(`flex-box`);

    console.log(flexbox)

    axios.get(`http://localhost:9000/api/novels`, { responseType:`json` }) 
    
    .then(function(res) {
        if(res.status==200) {
            console.log(res);
            var noveldata = res.data;
            console.log(noveldata) // Esta es el JSON de todas las novelas agregadas
            console.log(noveldata[1])
            console.log(noveldata[0].picture)
            console.log(noveldata[1].picture)

            console.log(flexbox)

            for(var i = 0; i < noveldata.length; i++) {

                // 1. Crear div.flexitem
                var item = document.createElement(`a`)
                item.classList.add(`flex-item`)
                item.href = `#`;

                // 2. Crear imagen y modificar imagen (src)
                var imagen = document.createElement(`img`);

                var imageUrl = /* 'http://localhost:9000/' +  */noveldata[i].picture;
                imagen.src = imageUrl;

                // 3. Crear nombre de la novela
                var nameTitle = document.createElement(`p`);
                nameTitle.textContent = noveldata[i].name;

                // 3. Introducir imagen 

                item.appendChild(imagen);
                item.appendChild(nameTitle);

                flexbox.appendChild(item);

                
                // Usamos una clousure (function(index) {}) (i) )
                
                (function(index) {
                    item.addEventListener(`click`, function() {
                        console.log(noveldata[index])
                        var infoNovel = JSON.stringify(noveldata[index]);
                        localStorage.setItem(`novel_data`, infoNovel)
                        window.location.replace(`/novel.html?id=${noveldata[index]._id}`)
                    })
                } (i))

                /* (function(index) {
                    divArticulo.addEventListener(`click`, function() {
                        console.log(data.items[index]);
                        var infoElement = JSON.stringify(data.items[index]);
                        localStorage.setItem(`selectedItem`, infoElement)
                        window.location.replace(`../HTML/element.html`)
                    });
                })(i); */
                
            }
        }
    })
})





/* fetch("http://localhost:9000/api/novels")
    .then(response => response.json())
    .then (data => {

        var novelData = data;
        console.log(novelData);

        
        var elementDiv = document.getElementsByClassName(`element`);

        for(var i = 0; i < novelData.length; i++) {

            // 1. Creación
            var image = document.createElement(`img`)
            elementDiv[i].appendChild(image)

            // 2. Modificación
            image.src=novelData[i].picture;

            // 3. Inserción
            var elementDiv = document.getElementsByClassName(`element`);
        }
    })


 */
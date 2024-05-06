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
            console.log(noveldata)
            console.log(noveldata[0].picture)
            console.log(noveldata[1].picture)

            console.log(flexbox)

            for(var i = 0; i < noveldata.length; i++) {

                var elementDiv = document.createElement(`div`)
                elementDiv.classList.add(`flex-item`)

                var imagen = document.createElement(`img`);

                

                var imageUrl = /* 'http://localhost:9000/' +  */noveldata[i].picture;
                imagen.src = imageUrl;

                

                elementDiv.appendChild(imagen);
                flexbox.appendChild(elementDiv);

                
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
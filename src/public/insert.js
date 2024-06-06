/* const novel = require("../models/novel"); */


console.log("HOLA ESTO ES INSERT.JS")

document.getElementById(`files`).addEventListener(`change`, function() {
    var label = document.getElementById(`label-image-upload-id`);
    var imgContainer = document.getElementById(`img-selector-container`);
    var files = this.files;
    var filesNames = [];

    if (files.length > 0) {
        label.classList.add(`active`);
        for (let i = 0; i < files.length; i++) {
            filesNames.push(files[i].name);
            console.log(filesNames);
        }
        label.textContent = `Selected images: ${filesNames.join(`, `)}`
    } else {
        label.classList.remove(`active`);
    }

})

/* var imageInputHTML = document.getElementById(`imageInput`)
imageInputHTML.addEventListener(`change`, function(event) {

    var inputSelected = event.target;

    var fileName = inputSelected.files[0] ? inputSelected.files[0].name : '';
    document.getElementById(`fileName`).textContent = fileName;
})
 */
/* document.getElementById('imageInput').addEventListener('change', function(event) {
    var input = event.target;
    var fileName = input.files[0] ? input.files[0].name : '';
    document.getElementById('fileName').textContent = fileName;
}); */

novelFormHTML = document.getElementById(`novelForm`);
novelFormHTML.addEventListener(`submit`, function(event) {

    event.preventDefault() // Evita que el formulario se envie por defecto

    var formData = new FormData(this)

    console.log(formData)

    /* for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    } */

    axios.post(`http://localhost:9000/api/novels`, formData) 
    .then(function(res) {

        if(res.status==200) {
            console.log(res);
            console.log("¡Novela añadida correctamente!")
            novelFormHTML.reset();
        } else {
            console.log(`Error al insertar novela`)
        }
        
    }
)

})
/* const novel = require("../models/novel"); */


console.log("HOLA ESTO ES INSERT.JS")

var flag = `1`;

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

    function showPopup() {
        var curtain = document.getElementById(`curtain`);
        curtain.classList.add(`blur`);

        var popup = document.getElementById(`popup-in`);
        popup.classList.add(`visible`);
    }

    function hidePopup() {
        var curtain = document.getElementById(`curtain`);
        curtain.classList.remove(`blur`);
        var popup = document.getElementById(`popup-in`);
        popup.classList.remove(`visible`);
    }

    // Muestra el popup al dar submit (puedes ajustar este evento según tus necesidades)
    showPopup();

    // Oculta el popup al hacer clic en el botón
    var btnBackIn = document.getElementById('btn-back-in');
    btnBackIn.addEventListener('click', hidePopup);
    

    axios.post(`http://localhost:9000/api/novels`, formData) 
    .then(function(res) {

        if(res.status==200) {
            console.log(res);
            console.log(res.data)
            console.log(res.data._id)
            console.log("¡Novela añadida correctamente!")
            /* alert(`Se ha agregado la novela correctamente`) */
            novelFormHTML.reset();

            var viewAddNovel = document.getElementById(`view-add-novel`);
            viewAddNovel.addEventListener(`click`, () => {

                // FLAG
                localStorage.setItem(`flag`, flag);

                // Ir a Ver más detalles
                window.location.replace(`/novel.html?id=${res.data._id}`);
            })

        } else {
            console.log(`Error al insertar novela`)
        }
        
    }

)

})
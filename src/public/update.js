

console.log(`Estas en UPDATE`);

var flag = `1`;

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

            var flag = localStorage.getItem(`flag`);
            console.log(`Flag: ${flag}`);

            // 1.Recoger como objetos a todos los inputs

            var inputName = document.getElementById(`input-up-name`);
            var inputAuthor = document.getElementById(`input-up-author`);
            var inputGenre = document.getElementById(`input-up-genre`);
            var inputPubYear = document.getElementById(`input-up-pubYear`);
            var inputPages = document.getElementById(`input-up-pages`);
            var inputLang = document.getElementById(`input-up-lang`);
            var inputDescription = document.getElementById(`input-up-description`);

            // 2.Damos a cada input.value = novelInfo.propiety

            inputName.value = novelInfo.name;
            inputAuthor.value = novelInfo.author;
            inputGenre.value = novelInfo.genre;
            inputPubYear.value = novelInfo.publishedYear;
            inputPages.value = novelInfo.pages !== undefined ? novelInfo.pages : '';
            inputLang.value = novelInfo.language;
            inputDescription.value = novelInfo.description;

            var imgUp = document.getElementById(`img-up`);
            imgUp.src = novelInfo.picture;

            // 3. Cuando se le de click a upload se actualizara novel

            var formDataUpdate = document.getElementById(`novelFormUpdate`);

            formDataUpdate.addEventListener(`submit`, function(event) {
                event.preventDefault(); //Previene la reedirección
                console.log(`Prevent Default ejecutado`);
                

                // Función popup
                function showPopup() {
                    var curtain = document.getElementById(`curtain`);
                    curtain.classList.add(`blur`);
            
                    var popup = document.getElementById(`popup-up`);
                    popup.classList.add(`visible`);
                }
            
                function hidePopup() {
                    var curtain = document.getElementById(`curtain`);
                    curtain.classList.remove(`blur`);
                    var popup = document.getElementById(`popup-up`);
                    popup.classList.remove(`visible`);
                }
            
                // Muestra el popup al dar submit (puedes ajustar este evento según tus necesidades)
                showPopup();
            
                // Oculta el popup al hacer clic en el botón
                var btnBackIn = document.getElementById('btn-back-in');
                btnBackIn.addEventListener('click', hidePopup);

                var formData = new FormData(formDataUpdate);

                axios.put(`http://localhost:9000/api/novels/${id}`, formData) 
                .then(function(res) {

                 if(res.status==200) {
                    console.log(res);
                    console.log(res.data)
                    console.log(res.data._id)
                    console.log("¡Novela actualizada correctamente!")
                    /* alert(`Se ha actualizado la novela correctamente`) */
                    console.log(novelInfo)


                    // Click en button 
                    var viewAddNovel = document.getElementById(`view-add-novel`);
                    viewAddNovel.addEventListener(`click`, () => {

                    // FLAG
                    localStorage.setItem(`flag`, flag);

                    // Ir a Ver más detalles
                    window.location.replace(`/novel.html?id=${novelInfo._id}`);
            })

                }
                
            })
                

            })

            


        }





    })
})
/* const { response } = require("express"); */


document.addEventListener(`DOMContentLoaded`, () => {

    console.log(`Estas en la pagina updel`)


    var updelContainer = document.getElementById(`novels_data_up`);

    axios.get(`http://localhost:9000/api/novels`, { responseType:`json` })
    .then (function (res) {
        if(res.status==200) {
            console.log(res.data);
            var updelNovelData = res.data;
            var flag = `1`;
            var eliminateBtn = document.getElementById(`del-input-submit`)
            var novelIndexSelected = null;
            var delInputText = document.getElementById(`del-input-text`);

            for(var j = 0; j < updelNovelData.length; j++) {
                
                // 1. Crear div.flexitem
                var itemUpDel = document.createElement(`div`)
                itemUpDel.classList.add(`flex-item-updel`)

                // 1.5 Crear div.img-container-updel
                var imgContainerUpDel = document.createElement(`div`);
                imgContainerUpDel.classList.add(`img-container-updel`);

                // 2. Crear imagen y modificar imagen (src)
                var imagen = document.createElement(`img`);

                var imageUrl = /* 'http://localhost:9000/' +  */updelNovelData[j].picture;
                imagen.src = imageUrl;

                // 3. Crear div.data
                var dataDiv = document.createElement(`div`);
                dataDiv.classList.add(`data`);

                // 4. Crear p.data-title
                var title = document.createElement(`p`);
                title.classList.add(`data-title`);
                title.textContent = updelNovelData[j].name;

                // 5. Crear p.data-name 
                var dataName = document.createElement(`p`);
                dataName.classList.add(`data-name`);
                dataName.textContent = `Nombre: ${updelNovelData[j].name}`;

                // 6. Crear p.data-author
                var dataAuthor = document.createElement(`p`);
                dataAuthor.classList.add(`data-author`);
                dataAuthor.textContent = `Autor: ${updelNovelData[j].author}`;

                // 7. Crear p.data-genre
                var dataGenre = document.createElement(`p`);
                dataGenre.classList.add(`data-genre`);
                dataGenre.textContent = `Genero: ${updelNovelData[j].genre}`;
                
                // 8. Crear p.data-year
                var dataYear = document.createElement(`p`);
                dataYear.classList.add(`data-year`);
                dataYear.textContent = `Año de publicación: ${updelNovelData[j].publishedYear}`
                
                // 9. OPCIONES DIV
                var optionsDiv = document.createElement(`div`);
                optionsDiv.classList.add(`opciones`);

                // 10. a.view-more
                var viewOption = document.createElement(`a`);
                viewOption.classList.add(`view-more`);
                viewOption.textContent = `Ver más`
                /* viewOption.href = `#` */

                // 11.a.upload
                var uploadOption = document.createElement(`a`);
                uploadOption.classList.add(`upload`);
                uploadOption.textContent = `Actualizar`;
                uploadOption.href = `#`

                // 12. a.delete
                var deleteOption = document.createElement(`a`);
                deleteOption.classList.add(`delete`);
                deleteOption.textContent = `Eliminar`
                deleteOption.href = `#`
                
                // INSERTAR TODO
                updelContainer.appendChild(itemUpDel);
                
                // Insertamos imagen al div itemUpDel
                itemUpDel.appendChild(imgContainerUpDel);
                imgContainerUpDel.appendChild(imagen);

                // Insertamos el div.data al itemUpDel
                itemUpDel.appendChild(dataDiv)

                // Insertamos elementos en dataDiv
                dataDiv.appendChild(title);
                dataDiv.appendChild(document.createElement(`br`)); // Insertamos <br>

                dataDiv.appendChild(dataName);
                dataDiv.appendChild(document.createElement(`br`));

                dataDiv.appendChild(dataAuthor);
                dataDiv.appendChild(document.createElement(`br`));

                dataDiv.appendChild(dataGenre);
                dataDiv.appendChild(document.createElement(`br`));

                dataDiv.appendChild(dataYear);

                // Insertamos opciones en dataDiv
                dataDiv.appendChild(optionsDiv);
                
                // Insertamos elementos en optionsDiv
                optionsDiv.appendChild(viewOption);
                optionsDiv.appendChild(uploadOption);
                optionsDiv.appendChild(deleteOption);

                // View more (href --> window.replace())
                (function(index) {

                    viewOption.addEventListener(`click`, function() {

                        // FLAG
                        localStorage.setItem(`flag`, flag);

                        // Ir a Ver más detalles
                        window.location.replace(`/novel.html?id=${updelNovelData[index]._id}`)

                    })

                    /* Función popup */

                    function toggle() {
                        var curtain = document.getElementById(`curtain`);
                        curtain.classList.toggle(`blur`);

                        var popup = document.getElementById(`popup-del`);
                        popup.classList.toggle(`visible`);
                    }

                    //*. Número de novela a eliminar
                    // Hay que definirla más arriba
                    /* var novelIndexSelected = null; */

                    deleteOption.addEventListener(`click`, toggle);
                    deleteOption.addEventListener(`click`, () => {
                        console.log(index); // ¡¡¡ HOLY SHIT !!! VAYA CON LAS INSTANCIAS JAJAJAJA
                        novelIndexSelected = index;
                    })
                    // Tiene que estar definida más arriba delInputText para que se borre el valor luego de
                    // hacer click en eliminateBtn
                    /* var delInputText = document.getElementById(`del-input-text`); */
                    /* HAY QUE DEFINIR eliminateBtn más arriba */
                    /* var eliminateBtn = document.getElementById(`del-input-submit`) */

                    delInputText.addEventListener(`input`, () => {
                        var delInputTextValue = delInputText.value.trim().toLowerCase();

                        if (delInputTextValue === `eliminar`) {
                            eliminateBtn.classList.add(`deleteable`);
                        } else {
                            eliminateBtn.classList.remove(`deleteable`);
                        }
                    })

                    

                    /* var deleteBtns = document.querySelectorAll(`.delete`);

                    deleteBtns.forEach( (btn) => {
                        btn.addEventListener(`click`, toggle)
                    }) */


                    var btnBack = document.getElementById(`btn-back`);
                    btnBack.addEventListener(`click`, toggle)

                    

                    /* var eliminarBtn = document.getElementById(``) */

                    /* deleteOption.addEventListener(`click`, function() { */

                        // Borrar novela de la base de datos y reload la página

                        /* var respuesta = prompt(`¿Quieres borrar esta novela? S/N`); */

                        /* if (respuesta == `S`) {
                            console.log(`Borrando novela...`)

                            axios.delete(`http://localhost:9000/api/novels/${updelNovelData[index]._id}`)
                            .then(function(res) {
                        
                                if(res.status==200) {
                                    alert(`Se borrado la novela correctamente`)
                                    location.reload();
                                } else {
                                    console.log(`Error al borrar la novela`)
                                }
                                
                            })

                        } */

                    /* }) */


                } (j))

                /* console.log(noveldata[index]) */
                        /* var infoNovel = JSON.stringify(updelNovelData[index]);
                        localStorage.setItem(`novel_data`, infoNoveinfoNovel) */


                // Usamos una clousure (function(index) {}) (i) )
                
                /* (function(index) {
                    item.addEventListener(`click`, function() {
                        console.log(updelNovelData[index])
                        var infoNovel = JSON.stringify(updelNovelData[index]);
                        localStorage.setItem(`novel_data`, infoNovel)
                        window.location.replace(`/novel.html?id=${updelNovelData[index]._id}`)
                    })
                } (j)) */

            
            } // Salida del for

            // FUNCIÓN ELIMINAR CON TODAS LAS LETRAS (AHORA SÍ)
            eliminateBtn.addEventListener(`click`, () => {

                // Borramos valor del input ELIMINAR
                delInputText.value = ``;

                console.log(`Borrando novela...${novelIndexSelected}`)

                axios.delete(`http://localhost:9000/api/novels/${updelNovelData[novelIndexSelected]._id}`)
                .then(function(res) {
                        
                    if(res.status==200) {
                        alert(`Se borrado la novela correctamente`)
                        location.reload();
                    } else {
                        console.log(`Error al borrar la novela`)
                    }
                    
                })            

                /* // Barrera de seguridad
                delInputText.addEventListener(`input`, () => {
                    var delInputTextValue = delInputText.value.trim().toLowerCase();

                    if (delInputTextValue === `eliminar`) {

                        console.log(`Borrando novela...`);

                    }

                }) */
                

            })
            

        }


    })

})
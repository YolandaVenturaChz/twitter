window.addEventListener('load', function() {
    /* creamos las variables que usaremos de html */
    var container = document.getElementById("container"); // padre
    var textarea = document.getElementById("txt"); // contenido
    var buton = document.getElementById("save"); //evento
    var contador = document.getElementById("cont")
        /* creando variables dentro de js */
    var max = 140;

    // creando funciones
    buton.addEventListener("click", function(event) {
        event.preventDefault();

        if (textarea.value) {
            // crear los elementos
            var texto = document.createElement("li");
            texto.textContent = 'A las ' + getHour() + ' : ' + textarea.value;
            container.insertBefore(texto, container.firstChild);
            textarea.value = '';
            contador.textContent = 140;
        } else {
            alert('Ingrese una cadena de texto');
        }
    })


    // dando dinamica a textarea 
    textarea.addEventListener("keyup", function(event) {
        var letters = textarea.value.length;
        contador.textContent = max - letters;
        if (letters > 140) {
            buton.disabled = true;
            contador.style.color = 'blue';

        } else if (letters >= 130) {
            buton.disabled = false;
            contador.style.color = 'red';

        } else if (letters < 130 && letters > 120) {
            buton.disabled = false;
            contador.style.color = 'yellow';
        } else {
            buton.disabled = false;
            contador.style.color = 'black';
        }
    });


    var tx = document.getElementsByTagName('textarea');
    for (var i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }

    // funcion para obtener la hora :
    function getHour() {
        var date = Date();
        var hour = date.split(' ')[4].slice(0, 5);
        return hour;
    }


});
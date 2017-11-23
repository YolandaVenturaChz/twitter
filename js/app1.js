window.addEventListener('load', function () {
    /**creamos las variables que usaremos de html */
    var container = document.getElementById("container");// padre
    var textarea = document.getElementById("txt");// contenido
    var buton = document.getElementById("save");//evento
    var contador = document.getElementById("cont")
    /** creando variables dentro de js */
    var max = 140;

    //creando funciones
    buton.addEventListener("click", function (event) {
        event.preventDefault();

        if (textarea.value) {
            //crear los elementos
            var texto = document.createElement("li");
            texto.textContent = textarea.value;
            container.insertBefore(texto, container.firstChild);
            textarea.value = '';
            contador.textContent = 140;

        }
    })
    // dando dinamica a textarea 
    textarea.addEventListener("keyup", function (event) {
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
        }
        else {
            buton.disabled = false;
            contador.style.color = 'black';
        }


    })
    textarea.addEventListener("checkEnters", function (event) {
        event.preventDefault();
        var text = event.target.value.split('');
        var count = 0;

        for (var i = 0; i < text.length; i++)
            if (text[i] === '\n')
                count++;

        if (count)
            event.target.rows = count + 2;
    
    })
// agrega filas si el cociente entre los caracteres y las columnas del
// textarea, es menor a las filas del textarea actuales
function checkLong(event) {
    if ((event.target.value.length / event.target.cols) < event.target.rows)
        event.target.rows = (event.target.value.length / event.target.cols) + 2;
}




})
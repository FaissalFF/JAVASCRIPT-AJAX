var boton = document.getElementById("btn1");
var contenedor = document.createElement("div");
contenedor.className="gallery";
boton.onclick = function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);
            function recorrer(item, index){
                let parrafo = document.createElement("p");
                parrafo.innerHTML += "<strong>Nombre:</strong> "+item.nombre+"<br>"+"<strong>Direccion:</strong> "+item.direccion+"<br>" +"<strong>Cargo: </strong>"+ item.cargo+"<br>" + "<strong>Edad: </strong>"+ item.edad;
                let img = document.createElement("img");
                img.setAttribute("src", item.imagen);
                let cont = document.createElement("div");
                cont.style.border='5px solid black';
                    cont.appendChild(img);
                    cont.appendChild(parrafo);
                contenedor.appendChild(cont);
            }
            document.body.appendChild(contenedor);
        }
    };
    xhr.open("GET", "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php", true);
    xhr.send();
}
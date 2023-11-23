var boton = document.getElementById("btn1");
var contenedor = document.createElement("div");
contenedor.className="gallery";
boton.onclick = function(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);
            function recorrer(item){
                let parrafo = document.createElement("p");
                parrafo.innerHTML += "<strong>Id:</strong> "+item.id+"<br>"+"<strong>lugar:</strong> "+item.lugar+"<br>" +"<strong>activo: </strong>"+ item.activo+"<br>" + "<strong>Tiempo: </strong>"+ item.tiempo;
                let source = document.createElement("source");
                source.src = item.url;
                source.type = "video/mp4";
                let video = document.createElement("video");
                video.style.width = '270px';
                video.style.height = '200px';
                video.controls = true;
                video.appendChild(source);
                let cont = document.createElement("div");
                cont.style.border='5px solid black';
                    cont.appendChild(video);
                    cont.appendChild(parrafo);
                contenedor.appendChild(cont);
            }
            document.body.appendChild(contenedor);
        }
    };
    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();
}
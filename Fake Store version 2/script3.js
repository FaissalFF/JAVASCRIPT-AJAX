var vClaves = [];
var tabla = document.getElementById("tabla1");
tabla.style.border = '2px solid black';
window.onload=inicio;
function inicio(){
 let btn=document.getElementById("listar1");
 btn.onclick=function(){
  btn.setAttribute("disabled", true);
   fetch('http://camacho.atwebpages.com/webcam/getWebcam.php').then(response => response.json()).then(datos =>{
    console.table(datos);
    vClaves = Object.keys(datos[0]);
    let linea = document.createElement("tr");
    vClaves.forEach(element => {
      let col = document.createElement("td");
      col.innerHTML = element;
      col.style.border = '2px solid black';
      linea.appendChild(col);
    });
    tabla.appendChild(linea);
    cargarTabla(datos);
  } );
 }
}
function cargarTabla(datos){
   for(let i = 0; i<datos.length; i++){
    let linea = document.createElement("tr");
    vClaves.forEach(element => {
      if(esImagen(datos[i][element])){
        let col = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src", datos[i][element]);
        img.style.width = '80px';
        img.style.height = '80px';
        col.style.border = '2px solid black';
        col.appendChild(img);
        col.setAttribute("id", datos[i].id);
        col.onmouseover = function(){
          funcionAmpliar(col.getAttribute("id"));
        }
        col.onmouseleave = function(){
          funcionDisminuir(col.getAttribute("id"));
        }
        linea.appendChild(col);
      }else if(esVideo(datos[i][element])){
        let col = document.createElement("td");
        let vid = document.createElement("video");
        vid.src = datos[i][element];
        vid.setAttribute("type", "video/mp4");
        vid.controls = true;
        vid.setAttribute("autoplay", true);
        vid.setAttribute("loop", true);
        vid.style.width = '250px';
        vid.style.height = '100px';
        col.style.border = '2px solid black';
        col.appendChild(vid);
        linea.appendChild(col);
      }else{
        let col = document.createElement("td");
        console.log(element + " " + datos[i][element]);
        col.innerHTML = datos[i][element];
        col.style.border = '2px solid black';
        linea.appendChild(col);
      }
    });
      tabla.appendChild(linea);
   }
}

function esImagen(url){
  if(url.toString().toLowerCase().includes(".jpg" || ".png" || ".jpeg" || ".gif" || ".webp" || ".avif") || url.toString().toLowerCase().includes("image" || "imagen" || "photo" || "images" ||"photos")){
    return true;
  }else{
    return false;
  }
}

function esVideo(link){
  if(link.toString().toLowerCase().includes(".mp4" || ".avi" || ".mov" || ".flv")){
    return true;
  }else{
    return false;
  }
}
function funcionAmpliar(id){
  let col = document.getElementById(id);
  col.style.transform = 'scale(1.2)';
}
function funcionDisminuir(id){
  let col = document.getElementById(id);
  col.style.transform = 'scale(1)';
}
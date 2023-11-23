var divP = document.getElementById("cajaImagenes");
var boton = document.getElementById("mostrarJS");
var num1;
var num2;
let prin = document.createElement("div");
prin.setAttribute("id", "principal");
boton.onclick= function(){
    funcionImagenes();
   setInterval(funcionImagenes, 3000);
}

function funcionImagenes(){
    divP.innerHTML="";
    prin.innerHTML="";
    num1 = Math.floor(Math.random() * 19);
    let img2 = document.createElement("img");
    img2.setAttribute("src", "img\\" + num1 +".JPG");
    prin.appendChild(img2);
    prin.setAttribute("name", num1);
    document.body.appendChild(prin);
    for(let i = 0; i<5; i++){
        num2 = Math.floor(Math.random() * 19);
        let div = document.createElement("div");
        div.setAttribute("id", i);
        div.setAttribute("name", num2);
        let img = document.createElement("img");
        img.setAttribute("src", "img\\" + num2 +".JPG");
        img.style.width ="80px";
        img.style.height ="80px";
        div.appendChild(img);
        divP.appendChild(div);
    }

        for(let i = 0; i < 5; i++){
            let div = document.getElementById(i);
            div.onclick = function(){
                if(prin.getAttribute("name") === div.getAttribute("name")){
                    alert("Bien");
                }else{
                    alert("Fallo");
                }
            }
        }

}
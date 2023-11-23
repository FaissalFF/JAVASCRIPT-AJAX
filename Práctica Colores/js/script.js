var cont = document.createElement("div");
cont.className = "gallery";
var boton = document.getElementById("jugar");
var boton2 = document.getElementById("jugar2");
var num = 0;
var intRojo;
var intVerde;
var intRojo2;
var intVerde2;
window.onload= funcionRellenar;
function funcionRellenar(){
    for(let i = 0; i<30; i++){
        let caja = document.createElement("div");
        caja.setAttribute("id", i);
        caja.className="fondo";
        cont.appendChild(caja);
    }

    document.body.appendChild(cont);
}
    

boton.onclick = function(){
    num =0;
    cont.innerHTML="";
    funcionRellenar();
    clearInterval(intRojo2);
    clearInterval(intVerde2);
    intRojo = setInterval(funcionRojo, 100);
    boton.setAttribute("disabled", true);
    boton2.removeAttribute("disabled");
}

boton2.onclick = function(){
    num = 1;
    cont.innerHTML="";
    funcionRellenar();
    clearInterval(intRojo);
    clearInterval(intVerde);
    intRojo2 = setInterval(funcionRojo2, 100);
    boton2.setAttribute("disabled", true);
    boton.removeAttribute("disabled");
}

function funcionRojo(){
    if(Number(num) ==30){
        clearInterval(intRojo);
        num = 0;
        intVerde = setInterval(funcionVerde, 100);
    }else{
        let caja = document.getElementById(num);
        caja.style.backgroundColor= "Red";
        num ++;
    }

}
function funcionVerde(){
    if(Number(num) == 30){
        clearInterval(intVerde);
        num = 0;
        intRojo =setInterval(funcionRojo, 100);
    }else{
        let caja = document.getElementById(num);
        caja.style.backgroundColor= "Green";
        num ++;
    }
}

function funcionRojo2(){
    let num2 = num - 1;
    console.log(num);
    console.log(num2);
    if(Number(num) == 30){
        num = 0;
    }else{
        let caja = document.getElementById(num);
        let caja3 = document.getElementById(29);
        if(caja.getAttribute("id") == 0){
            caja.style.backgroundColor= "Red";
            caja3.style.backgroundColor="Green";
        }else{
            caja.style.backgroundColor= "Red";
            let caja2 = document.getElementById(num2);
            caja2.style.backgroundColor = "Green";
        }
        num ++;
    }
}
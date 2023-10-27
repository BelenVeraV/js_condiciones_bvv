///////Actividad 1//////
function cambioBorder(){

    let border = document.getElementById("dev").style.border;
    
    if (border == '2px solid red'){
        document.getElementById("dev").style.border = 'none';
    } else {
        document.getElementById("dev").style.border = '2px solid';
        document.getElementById("dev").style.borderColor = 'red';
    }
}

///////Actividad 2//////
function verificarStickers(){

    sticker1 = document.querySelector('#id_sticker1').value;
    sticker2 = document.querySelector('#id_sticker2').value;
    sticker3 = document.querySelector('#id_sticker3').value;

    total = parseInt(sticker1) + parseInt(sticker2) + parseInt(sticker3);
    
    if (total<= 10){
        document.getElementById('alerta').innerHTML = 'Llevas '+total+' stickers';
    } else {
        document.getElementById('alerta').innerHTML = 'Llevas demasiados stickers';
    }
}

///////Actividad 3//////
function validarPass(){

    clave1 = document.getElementById('select1').value;
    clave2 = document.getElementById('select2').value;
    clave3 = document.getElementById('select3').value;

    if (clave1 == 9 && clave2 == 1 && clave3 ==1){
        document.getElementById('clave').innerHTML= 'Password 1 es Correcto';
    } else if (clave1 == 7 && clave2 == 1 && clave3 == 4){
        document.getElementById('clave').innerHTML= 'Password 2 es Correcto';
    } else {
        document.getElementById('clave').innerHTML= 'Password es Incorrecto';
    }
}
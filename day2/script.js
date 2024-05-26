 function hacerCruz(){
    document.getElementsByClassName('button')[0].classList.toggle('active')
    var elementos = document.getElementsByClassName('linea')
    for( var i =0 ; i < elementos.length;i++){
        elementos[i].classList.remove('no-animation')
    }
 }
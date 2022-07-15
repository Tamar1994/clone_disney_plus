document.body.onresize = function() {
    $(".container").css("margin-left", 0);
}

var validador = 1;

function start(){
setTimeout(() => {
    if(validador==1){
    mudarDiv('direita', validador);
    start();
    } else {
    start();
    }
}, 4000);;
}

function mudarDiv(direcao, validacao){

    if(validacao == 1){

    validador = 0;

    var distancia = parseInt($(".container").css("width"));
    var distancia2 = distancia/5;
    var distanciaAtual = parseInt($(".container").css("margin-left"));
    var distanciaMaxima = distancia2*4;


    console.log(distanciaAtual);
    console.log(direcao);

    if(direcao=='esquerda'){

        if(distanciaAtual>=0){
            $(".container").css("margin-left", 0-distanciaMaxima);
        } else {
            $(".container").css("margin-left", distanciaAtual+distancia2);
        }

        setTimeout(() => {
            validador = 1;
        }, 2000);    


    }
    
    if(direcao=='direita'){

        var distanciaMaximaCorrigida = 0-distanciaMaxima;

        if(distanciaAtual<=distanciaMaximaCorrigida){
            $(".container").css("margin-left", 0);
        } else {
            $(".container").css("margin-left", distanciaAtual-distancia2);
        }

        setTimeout(() => {
            validador = 1;
        }, 2000);

    }
    }

}

start();

window.onscroll = function(){miFuncion()};
var biografia = document.getElementById("biografia");
var inventos = document.getElementById("inventos");
var premios = document.getElementById("premios");
var estudios = document.getElementById("estudios");

var distancia_biografia, distancia_inventos, distancia_premios, distancia_estudios;

function miFuncion(){
distancia_biografia = window.innerHeight - biografia.getBoundingClientRect().top;
if(distancia_biografia >= 200)
    biografia.classList.add("efecto-biografia");  
}

distancia_inventos = window.innerHeight - inventos.getBoundingClientRect().top; 
if(distancia_inventos >= 200){
    inventos.classList.add("efecto-inventos");
}
distancia_premios = window.innerHeight - premios.getBoundingClientRect().top;
 if(distancia_premios >= 200){
    premios.classList.add("premios-efecto");
}
distancia_estudios = window.innerHeight - estudios.getBoundingClientRect().top;
if(distancia_estudios >= 200) {
}
estudios.classList.add("estudios-efecto");
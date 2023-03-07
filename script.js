var pontos = 0;
var tempo = 10;
var timerId = setInterval(countdown, 1000);

document.getElementById("botao").addEventListener("click", function(){
	pontos++;
	document.getElementById("score").innerHTML = pontos;
});

function countdown(){
	tempo--;
	document.getElementById("time").innerHTML = tempo;
	if(tempo == 0){
		clearInterval(timerId);
		alert("Acabou o tempo! Pontuação: " + pontos + "!");
	}
}
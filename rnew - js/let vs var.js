let variable1;

function funcionPrimero () {
	for (let i = 0; i < 3; i++) {
		console.log(i);
	};
	console.log(i);//sale error por que con let se muere la variable despues de su alcance
}
function funcionSegundo () {
	for (var i = 0; i < 3; i++) {
		
	};
	console.log(i);// no sale error, existe el ultimo valor de i 
}
funcionPrimero();
funcionSegundo();
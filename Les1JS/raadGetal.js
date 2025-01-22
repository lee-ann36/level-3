//de gebruiker mag proberen om het 'te raden' getal te raden.
//Het te raden getal mag gewoon een vast getal zijn dat in de code staat (hardcoded)

//Een regel code is gegeven, hoe nu verder?
alert("Hallo");
let numberGuessed = prompt("Raad het getal (1 tot en met 10)");
console.log(numberGuessed);

let nummer;
nummer = 7;

if( nummer == numberGuessed){
    alert('het is juist');

} else {
    alert('nee dat is niet juist');
}
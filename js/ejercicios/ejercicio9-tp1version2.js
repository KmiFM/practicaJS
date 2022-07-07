let frase = prompt("igresa una frase de hasta 10 caracteres");
console.log(frase);
console.log(frase.length);
console.log(frase.charAt(0));
console.log(frase.charAt(frase.length - 1));
console.log(frase.toLowerCase());
//actualizacion de la variable frase
frase = frase.toLowerCase();
//Hola Mundo

for (let vocal = 0; vocal < frase.length; vocal++) {
  console.log(frase.charAt());


if (
  frase.charAt(0) === "a" ||
  frase.charAt(0) === "e" ||
  frase.charAt(0) === "i" ||
  frase.charAt(0) === "o" ||
  frase.charAt(0) === "u"
) {
  document.write(frase.charAt(vocal));
}
}
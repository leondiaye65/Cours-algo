exercice4


let Taille = Number(prompt("Entrez votre taille en CM"));
let poids = Number(prompt("Entrez votre poids en KG"));
console.log(" Taille = " + Taille);
console.log(" poids = "  + poids);

let IMC = poids / ((Taille / 100) * (Taille / 100));
console.log(IMC);
if (IMC < 18.5) {
    console.log("Vous avez une insuffisance ponderale")
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Vous avez un poids normal")
} else if (IMC >= 25 && IMC < 30) {
    console.log("Vous etes en surpoids")
} else {
    console.log("Vous etes en obesité")

}
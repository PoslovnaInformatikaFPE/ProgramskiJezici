// let prviSabirak = 1
// let drugiSabirak = 3
// console.log(typeof drugiSabirak)
// let rezultat = prviSabirak + drugiSabirak // 4

// console.log("Rezultat sabiranja je:", rezultat)

// U JS ne navodimo tip podatka
// const, let i var

// var 
// function scope

// function saberi(){
//     var a = 5
//     console.log("Printanje unutar funkcije", a); // 5
// }

// saberi()

// console.log("Printanje van funkcije", a); // greška

// let 
// block scope

// {
//     let a = 5
//     var b = 10

//     console.log("a unutra:", a); // 5
//     console.log("b unutra:", b); // 10
// }

// // console.log("a spolja:", a); 
// console.log("b spolja:", b); // 10 

// NAPOMENA KORISTIMO LET I CONST
// let broj1 = 10
// broj1 = 20
// console.log("broj1 je ", broj1);

// const tekst = "Neki tekst"
// tekst = "Ovo je novi tekst"
// console.log("broj2 je ", broj2); // 10

// IF - PROVJERE USLOVA

// let godineStarosti = 18

// if (godineStarosti >= 18) {
//     console.log("Osoba može ući");
// } else {
//     console.log("Osoba nije starija od 18 godina! Ne može ući!")
// }

// let brojBodova = 65

// if(brojBodova > 50 && brojBodova < 61){
//     console.log("Student je dobio 6");
// }

// if(brojBodova > 60 && brojBodova < 71){
//     console.log("Student je dobio 7");
// }

let brojBodova = 40

if (brojBodova > 90) {
    console.log("Ocjena 10!");
} else if (brojBodova > 80) {
    console.log("Ocjena 9!");
} else if (brojBodova > 70) {
    console.log("Ocjena 8!");
} else if (brojBodova > 60) {
    console.log("Ocjena 7!");
} else if (brojBodova > 50) {
    console.log("Ocjena 6!");
} else {
    console.log("Pao!");
}


let brojA = 12
let brojB = "12"

if (true === 1) {
    console.log("DA");
} else {
    console.log("NE");
}

// for petlja

for (let i = 0; i < 10; i++) {
    console.log("Printam:", i);
}

// console.log("I posle petlje:", i);

let i = 0

while(i<10){
    console.log("I je:", i);
    i = i+1
}

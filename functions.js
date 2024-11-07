// Standardni način deklaracije funkcije

function sum(a, b) {
    // console.log("Rezultat sabiranje je:", a+b);
    return a + b // vraćamo zbir dva parametra
}

let rezultat = sum(7, 9) // poziv funkcije
console.log("Rezultat: ", rezultat);

// Arrow function
const sum2 = (a, b) => {
    return a + b
}

let rezultat2 = sum2(5, 5)
console.log("Rezultat 2: ", rezultat2);

// funkcija bez argumenata
function printanjeHelloWorld() {
    console.log("Hello World");
}

printanjeHelloWorld()

// Kreirati funkciju koja za ulazni parametar ima integer, a vrši printanje svih brojeva od 0 do tog broja kog smo unijeli kao parametar

function counter(num) {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
}

counter(0)

// Zadatak 2: kreirati funkciju koja kao parametar prima iznos fakture, a treba da vrati iznos sa zaračunatim PDV-om. Treba da ima povratnu  vrijednost. Kasnije ispisati u konzoli rezultat povratne vrijednosti.

let pdv = 1.17
const iznosSaPDV = (cijena) => {
    return cijena * pdv
}

let patikeBezPDV = 2000
let patikeSaPDV = iznosSaPDV(patikeBezPDV)
console.log("Cijena sa PDV: ", patikeSaPDV);

// Funkcija kao parametar u drugoj funkciji - callback funkcija
function obracunajPopust(iznosPopusta, cijenaBezPDV, racunanjeCijene){
    return racunanjeCijene(cijenaBezPDV) * (1-iznosPopusta)
}

const cijenaSaPopustom = obracunajPopust(0.2,1000,iznosSaPDV)
console.log("Cijena sa popustom :", cijenaSaPopustom);

// Funkcija u funkciji

function spoljasnja(){
    let numA = 10

    function unutrasnja(){
        let numA = 30 // shadow na numA = 10
        let numB = 20 * numA
        return numB
    }

    return unutrasnja() * numA
}

console.log("Test :",spoljasnja());
// 10
// 200

// Closures
function fun1(){
    let num = 10

    return function fun2(){
        console.log("Broj je: ", num);
    }
}

const rez = fun1()
rez()

console.log("-----------------------------");

// var ime = "Petaar"

// {
//     var ime ="Milan"
//     console.log(ime);
// }

// console.log(ime);

// var voce = "jabuka"

// function kupiVoce(){
//     var voce = "jagoda"
//     console.log(voce);
// }

// console.log(voce)
// kupiVoce()

// let voce  = "mango"

// {
//     let voce ="grozdje"
//     console.log(voce);
// }

// console.log(voce);

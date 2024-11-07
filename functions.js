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

let rezultat2 = sum2(5,5)
console.log("Rezultat 2: ", rezultat2);

// funkcija bez argumenata
function printanjeHelloWorld(){
    console.log("Hello World");
}

printanjeHelloWorld()

// Kreirati funkciju koja za ulazni parametar ima integer, a vrši printanje svih brojeva od 0 do tog broja kog smo unijeli kao parametar


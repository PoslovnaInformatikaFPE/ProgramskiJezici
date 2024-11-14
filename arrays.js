// NIZOVI ILI LISTE

// Primitivni tipovi podataka
let ime = "Petar"
let broj = 40
let bool = true

// Neprimitivni tipovi podataka
// Poređenje nizova
const niz = [4,2,7,8,9] // RF01
const niz2 = [4,2,7,8,9] // RF02
const niz3 = niz // RF01

console.log("Da li su nizovi isti?", niz == niz3); // RF01 == RF01
// console.log("Da li su nizovi isti?", niz === niz2);

// Šta je tip niza?
console.log("Tip niza je:", typeof niz);
// Kako provjeriti da li je nešto niz?
console.log("Da li je nešto niz?: ", Array.isArray(niz)); // true

// Pristupanje elementima niza
const ekspNiz = [5,7,9,6,1,5]

// Pristupanje pojedinačnom elementu:
console.log(ekspNiz[2]); // 9

// Dužina niza
console.log(ekspNiz.length);

// Pristup poslednjem elementu
console.log("Poslednji element u nizu:", ekspNiz[ekspNiz.length-1]); // dobijamo poslednji element

// VAŽNO: mijenjanje const kod nizova
const brojGodina = 40
// brojGodina = 50 // Greška jer kod primitivnih tipova ne mogu sa const da mijenjam vrijendost

const mojNiz = [1,2,3]
// mojNiz = [1,2,3] // Greška jer mijenjam referencu
// console.log("mojNiz: ", mojNiz);
mojNiz.push(4) // push dodaje element na kraj niza
console.log("mojNiz: ", mojNiz);

// VAŽNO: Nizovi su dobra struktura kada dodajemo ili uklanjamo elemente sa kraja
// Ako uklanjamo ili dodajemo elemente na početak ili neku drugo mjesto, nizovi nisu najbolje rješenje
// Pristup je ista brzina bez obzira gdje se element nalazi

const noviNiz = [3,4,1,8]

// Dodavanje elemenata
// Na kraj - ovdje je niz dobar:
noviNiz.push(0)
// Na početak:
noviNiz.unshift(5)

// Uklanjanje elemenata:
// Sa kraja - ovdje je niz dobar
noviNiz.pop()
// Sa početka: 
noviNiz.shift()

console.log("Trenutno stanje noviNiz:", noviNiz);

// Funkcija koja printa sve elemente u nizu, kao parametar prima niz

const najnovijiNiz = [3,4,9,1,17,0,10] // 7 elemenata

// function printElemenata(arr){
//     for(let i = 0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// printElemenata(najnovijiNiz)

// For Each - prolazi kroz svaki element niza i odradi nešto
let sum = 0

najnovijiNiz.forEach((el)=>{
    sum= sum + el
})

console.log("Suma je:", sum);

// Map metoda
const najnovijiNizUvecanZaJedan = najnovijiNiz.map((el)=>{
    return el + 1
})

console.log(najnovijiNizUvecanZaJedan);

// Filter
const ocjene = [5,7,5,9,8,10,6,6]
const polozili = ocjene.filter((ocjena)=>ocjena>5)
console.log("položili: ", polozili);

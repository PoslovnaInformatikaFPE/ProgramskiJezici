// GET metoda - povlačenje podataka

// Sinhorno - izvršava se jedna linija nakon druge, kao vodopad
// Asinhrona JS - ne znamo koliko asinhrona operacija može da traje
// Primjeri asinhronih operacija - CRUD, setTimeout ili setInterval, .json()

// console.log("Start");

// Primjer sa setTimeoutom
// setTimeout(() => {
//     console.log("Funkcija u set timeoutu 1000");
// }, 1000)

// setTimeout(() => {
//     console.log("Funkcija u set timeoutu");
// }, 0)

// console.log("End");

// GET METODA - POVČANJE PODATAKA SA SERVERA
const getMeasurements = async () =>{
    const response = await fetch("http://localhost:4000/measurements")
    // kod iznad - dobijamo odgovor servera na GET metodu
    const data = await response.json() // pretvaramo odgovor servera iz stringa u niz objekata
    console.log("Podaci sa servera:", data);
    // await označava da sačekamo da se završi izvršavanje date linije koda 
   
    // UPIS PODATAKA SA SERVERA U TABELU
    const tbody = document.getElementById("tabela-mjerenja") // selektujemo tijelo tabele u koji se smještaju redovi
    tbody.innerHTML = "" // čisti prvo tabelu

    // za svaki objekat u nizu odgovora servera (za svako mjerenje)
    // vršimo upis reda u tašu tabelu
    data.forEach(measurement => {
        let row = `
        <tr>
            <td>${measurement?.id}</td>
            <td>${measurement?.measurement_time}</td>
            <td>${measurement?.temperature}</td>
            <td>${measurement?.humidity}</td>
            <td>${measurement?.light}</td>
        </tr>
        `
        // iznad kreiramo red u posebnom stringu gdje možemo da dodajemo i JS
        tbody.innerHTML += row
    });
}


console.log("Start");
getMeasurements()
console.log("End");

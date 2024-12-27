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

    try{

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
                <td class="edit-delete"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-pencil" 
                        viewBox="0 0 16 16"
                        onClick=""
                        >
                        <path
                            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                    </svg>
                    <div class="action-button" onClick="deleteMjerenje(${measurement?.id})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-trash" viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                    </div>
                </td>
            </tr>
            `
            // iznad kreiramo red u posebnom stringu gdje možemo da dodajemo i JS
            tbody.innerHTML += row
        });
    }catch(err){
        const errEl = document.getElementById("error").innerHTML = "Dogodila se greška! Pokušajte kasnije."
    }
    
}


console.log("Start");
getMeasurements()
console.log("End");

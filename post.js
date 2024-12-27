async function insertData() {

    // kreiramo objekat mjerenja koji šaljemo na api ili backend
    // atributi imaju isti naziv kao u pydantic šemi na backendu
    // vrijednosti kupimo iz input polja koje selektujemo preko id-a

    const mjerenje = {
        id: document.getElementById("id").value,
        measurement_time: document.getElementById("time").value,
        temperature: document.getElementById("temp").value,
        humidity: document.getElementById("humidity").value,
        light: document.getElementById("light").value,
    }

    try {
        for (let mjerenjeAtribut in mjerenje) {
            // for petlja prolazi kroz svaki atribut objekta vozilo
            // if provjerava da li je polje prazno
            if (!mjerenje[mjerenjeAtribut]) {
                throw new Error("Nisu popunjena sva polja!")
            }
        }

        // pokušavamo da pošaljemo podatke na server i upišemo u bazu pomoću fetcha
        const response = await fetch("http://localhost:4000/measurements", {
            method: "POST", // metoda post je za slanje podataka tj. upis
            body: JSON.stringify(mjerenje), // u body ide objekat koji šaljemo apiju tj mjerenje
            headers: {
                "Content-type": "application/json" // tip podatka
            }
        })

        if (!response.ok) { // provjeravamo da li nije upisan podatak u bazu
            throw new Error("Podaci nisu upisani u bazu!") // ako nije bacamo grešku
        }

        // forsira refresh stranice
        location.reload()

    } catch (err) { // hvatamo grešku
        document.getElementById("greskaUpisa").innerHTML = err?.message
    }

}
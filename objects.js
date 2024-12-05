// Objekti imaju key-value parove
const niz = [2, 7, 54, 1, 9]

const student = {
    name: "Petar",
    age: 40
}
// Objekat nema redosled
// Pristupanje podacima u objektu O(1)
console.log("Ime studenta: ", student.name);
console.log("Ime studenta: ", student["name"]);

// Dodavanje novih atributa u objekat O(1)
let nazivAtributa = "univerzitet"
student[nazivAtributa] = "UIS"
student.prezime = "Petrović"
student["smjer"] = "Informatika"
console.log("Student objekat:", student);

// Uklanjanje postojećih atributa O(1)
delete student.smjer
console.log("Nakon brisana smjera:", student);

// Ugnježdeni objekti

const student2 = {
    name: "John",
    age: 30,
    address: {
        street: "River street",
        zip: 55000,
        num: 101
    }
}

// Upoređivanje objekata - po referencama

const obj1 = {
    number: 10
}

const obj2 = {
    number: 10
}

const obj3 = obj2

console.log("Da li su isti?", obj1 == obj2);
console.log("Da li su isti?", obj3 == obj2);

obj3.number = 15
console.log("Obj2 number:", obj2.number);// 15
console.log("Obj3 number:", obj3.number);// 15

const automobil = {
    marka: "Škoda",
    model: "Fabia",
    gorivo: "dizel",
    brojVrata: 4
}

// Izlistavanje svih ključeva ili atributa;
const listaAtributa = Object.keys(automobil)
console.log("Atributi objekta: ", listaAtributa);

// Izlitavanje vrijednosti objekta
const listaVrijednosti = Object.values(automobil)
console.log("Vrijednosti objekta: ", listaVrijednosti);

// Provjera da li neki objekat ima određeni property
console.log(automobil.hasOwnProperty("model"));//true
console.log(automobil.hasOwnProperty("registracija"));//false

const automobil2 = {
    marka: "VW",
    model: "Golf",
    gorivo: "dizel",
    brojVrata: 4
}

// Pretraga po vrijednosti atributa

for (let atribut in automobil2) {
    console.log("naziv atributa:", atribut);
    if (automobil2[atribut] == "dizel") {
        console.log("Pronašao sam ga i to je: ", atribut);
    }
}



// Niz objekata
const mjerenja = [
    {
        id: 1,
        measurement_time: "2024-12-03 09:35:40",
        temperature: 23.4,
        humidity: 51.00,
        light: 0
    },
    {
        id: 2,
        measurement_time: "2024-12-03 09:36:40",
        temperature: 23.4,
        humidity: 51.00,
        light: 0
    },
    {
        id: 3,
        measurement_time: "2024-12-03 09:37:40",
        temperature: 23.4,
        humidity: 51.00,
        light: 0
    }
]
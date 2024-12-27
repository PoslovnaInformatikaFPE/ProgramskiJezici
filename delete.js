async function deleteMjerenje(measurementId) {
    try {
        // pokušavamo da izbrišemo vozilo
        const response = await fetch(`http://localhost:4000/measurements/${measurementId}`, {
            method: "DELETE"
        })

        getMeasurements()

    } catch (err) {
        // ako se desi greška prilikom brisanja odradi ovo ispod
        console.log("greška je", err);
    }
}
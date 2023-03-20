function getInfo() {
    const stopNameElement = document.getElementById('stopName');
    const listNamesElement = document.getElementById('buses');
    const stopIdElement = document.getElementById('stopId').value;

    stopNameElement.textContent = "Loading...";
    const baseUrl = `http://localhost:3030/jsonstore/bus/businfo/${stopIdElement}`;

    fetch(baseUrl).then(res => res.json())
        .then(result => {
            listNamesElement.innerHTML = '';
            stopNameElement.textContent = result.name;
            for ([busId, arrivalTime] of Object.entries(result.buses)) {
                let newLi = document.createElement('li');
                newLi.textContent = `Bus ${busId} arrives in ${arrivalTime} minutes`
                listNamesElement.appendChild(newLi);
            }
        })
        .catch(error => stopNameElement.textContent = 'Error');

}

function solve() {
    let infoElement = document.querySelector('#info span');
    const departBtnElement = document.getElementById('depart');
    const arriveBtnElement = document.getElementById('arrive');

    let stopInfo = {
        next: 'depot',
        name: ''
    };


    function depart() {
        infoElement.textContent = `Loading...`
        departBtnElement.disabled = true;

        const baseUrl = `http://localhost:3030/jsonstore/bus/schedule/${stopInfo.next}`
        fetch(baseUrl).then(res => res.json()).then(result => {
            stopInfo.next = result.next;
            stopInfo.name = result.name;
            infoElement.textContent = `Next stop ${result.name}`;

            arriveBtnElement.disabled = false;
        })

    }

    async function arrive() {
        infoElement.textContent = `Arraving at ${stopInfo.name}`
        departBtnElement.disabled = false;
        arriveBtnElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
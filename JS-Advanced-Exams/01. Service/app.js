window.addEventListener('load', solve);

function solve() {
    const productTypeElement = document.getElementById('type-product');
    const descriptionElement = document.getElementById('description');
    const nameElement = document.getElementById('client-name');
    const phoneElement = document.getElementById('client-phone');

    const receivedOrders = document.getElementById('received-orders');
    const completedOrders = document.getElementById('completed-orders');
    document.querySelector('#completed-orders button').addEventListener('click', clearCompletedOrders);
    document.querySelector('#right > form > button').addEventListener('click', sendInfo);

    function sendInfo(e) {
        e.preventDefault();
        let data = {
            product: productTypeElement.value,
            description: descriptionElement.value,
            name: nameElement.value,
            phone: phoneElement.value,
        }
        if (data.product == '' || data.description == '' || data.name == '' || data.phone == '') {
            alert('Fill all inputs');
            return;
        }

        let div = document.createElement('div');
        div.setAttribute('class', 'container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${data.product}`;
        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${data.name}, ${data.phone}`;
        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${data.description}`;

        let startBtn = document.createElement('button');
        startBtn.textContent = 'Start repair'
        startBtn.classList.add('start-btn');
        startBtn.addEventListener('click', startRepair)

        let finishBtn = document.createElement('button');
        finishBtn.textContent = 'Finish repair';
        finishBtn.classList.add('finish-btn');
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', finishRepair)

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        receivedOrders.appendChild(div);
        clearInputs();
    }

    function startRepair(e) {
        let startBtn = e.target;
        let finishBtn = e.target.nextElementSibling;
        startBtn.disabled = true;
        finishBtn.disabled = false;
    }

    function finishRepair(e) {
        let currentOrder = e.target.parentNode;
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        let completedH2Node = currentOrder.children[0]
        let completedH3Node = currentOrder.children[1]
        let completedH4Node = currentOrder.children[2]

        divContainer.appendChild(completedH2Node);
        divContainer.appendChild(completedH3Node);
        divContainer.appendChild(completedH4Node);
        completedOrders.appendChild(divContainer);

        currentOrder.remove();
    }

    function clearCompletedOrders(e) {
        Array.from(e.target.parentNode.querySelectorAll('div')).forEach(order => {
            order.remove();
        })
    }

    function clearInputs() {
        descriptionElement.value = '';
        nameElement.value = '';
        phoneElement.value = '';
    }

}
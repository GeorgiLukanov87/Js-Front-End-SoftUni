function solve() {
    let buttons = document.querySelectorAll('button');
    let generate = buttons[0];
    let buy = buttons[1];
    let tbody = document.querySelector('tbody');
    let item = [];
    generate.addEventListener('click', e => {
        item = JSON.parse(document.querySelector('textarea').value);
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        let tdImg = document.createElement('td');
        tr.appendChild(tdImg);
        let tdImgImg = document.createElement('img');
        tdImg.appendChild(tdImgImg);
        tdImgImg.setAttribute('src', `${item[0].img}`);
        let tdName = document.createElement('td');
        tr.appendChild(tdName);
        let tdNameName = document.createElement('p');
        tdNameName.textContent = `${item[0].name}`;
        tdName.appendChild(tdNameName);
        let tdPrice = document.createElement('td');
        tr.appendChild(tdPrice);
        let tdPricePrice = document.createElement('p');
        tdPrice.appendChild((tdPricePrice));
        tdPrice.textContent = `${item[0].price}`;
        let tdDecoration = document.createElement('td');
        tr.appendChild(tdDecoration);
        let tdDecorationDecoration = document.createElement('p');
        tdDecoration.appendChild(tdDecorationDecoration);
        tdDecoration.textContent = `${item[0].decFactor}`;
        let tdInput = document.createElement('td');
        tr.appendChild(tdInput);
        let tdInputInput = document.createElement('input');
        tdInputInput.setAttribute('type', 'checkbox');
        tdInput.appendChild(tdInputInput);
    });
    let boughtItems = [];
    let totalPrice = 0;
    let averageDecoration = [];
    buy.addEventListener('click', e => {
        let allTrs = Array.from(document.querySelectorAll('tr:nth-child(n+2)'));
        for (const tr of allTrs) {
            let check = tr.lastChild.querySelector('input[type="checkbox"]');
            if (check.checked) {
                let name = tr.querySelector('td:nth-child(2)').textContent;
                let price = Number(tr.querySelector('td:nth-child(3)').textContent);
                let decoration = Number(tr.querySelector('td:nth-child(4)').textContent);
                boughtItems.push(name);
                totalPrice += price;
                averageDecoration.push(decoration);
 
            }
        }
        let textArea = document.querySelector('#exercise > textarea:nth-child(5)');
        textArea.value = `Bought furniture: ${boughtItems.join(', ')}` + '\n' +
            `Total price: ${totalPrice.toFixed(2)}` + '\n' +
            `Average decoration factor: ${averageDecoration.reduce((a, b) => a + b, 0) / averageDecoration.length}`;
    });
}
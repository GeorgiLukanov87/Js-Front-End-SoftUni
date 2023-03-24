window.addEventListener('load', solve);

function solve() {
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceElement = document.getElementById('price');

    const furniteListElement = document.getElementById('furniture-list');
    const totalPriceElement = document.getElementsByClassName('total-price')[0];
    document.getElementById('add').addEventListener('click', addItem);
    let prices = [];

    function addItem(e) {
        e.preventDefault();
        let data = {
            model: modelElement.value,
            year: Number(yearElement.value),
            description: descriptionElement.value,
            price: Number(priceElement.value),
        }
        if (data.model == '' || data.year == '' || data.description == '' || data.price == '' ||
            data.price < 0 || data.year < 0) {
            alert('Missing data or year/price must be positive number');
        }
        
        let trInfo = customHTMLelement('tr', '', 'info');
        customHTMLelement('td', data.model, '', trInfo);
        customHTMLelement('td', data.price.toFixed(2), '', trInfo);

        let btnsContainer = document.createElement('td');
        let moreBtn = customHTMLelement('button', 'More Info', 'moreBtn');
        moreBtn.addEventListener('click', moreInfo)
        btnsContainer.appendChild(moreBtn)
        let buyBtn = customHTMLelement('button', 'Buy it', 'buyBtn');
        buyBtn.addEventListener('click', buyIt)
        btnsContainer.appendChild(buyBtn)

        trInfo.appendChild(btnsContainer);
        furniteListElement.appendChild(trInfo);

        let hideTr = customHTMLelement('tr', '', 'hide');
        let hideYearTd = customHTMLelement('td', data.year, '', hideTr, 'Year');
        let hideDscrTd = customHTMLelement('td', data.description, '', '', 'Description');
        hideDscrTd.setAttribute('colspan', 3);
        hideTr.appendChild(hideDscrTd);

        furniteListElement.appendChild(hideTr)
    }

    function moreInfo(e) {
        let moreInfoBtn = e.target;
        let hideTrSibling = moreInfoBtn.parentNode.parentNode.nextElementSibling;
        if (moreInfoBtn.textContent == 'More Info') {
            moreInfoBtn.textContent = 'Less Info';
            console.log(hideTrSibling)
            hideTrSibling.style.display = 'contents';
        } else {
            moreInfoBtn.textContent = 'More Info';
            hideTrSibling.style.display = 'none';
        }
    }

    function buyIt(e) {
        let price = e.target.parentNode.parentNode.children[1].textContent
        prices.push(Number(price));
        let totalSum = prices.reduce((a, b) => a + b, 0);
        totalPriceElement.textContent = totalSum.toFixed(2);
        e.target.parentNode.parentNode.remove();
    }

    function customHTMLelement(type, content, className, parent, extraInfo) {
        let newElement = document.createElement(type);
        if (extraInfo) {
            newElement.textContent = `${extraInfo}: ${content}`;
        } else {
            newElement.textContent = content
        }
        if (className) {
            newElement.classList.add(className);
        }
        if (parent) {
            parent.appendChild(newElement);
        }
        return newElement;
    }

}

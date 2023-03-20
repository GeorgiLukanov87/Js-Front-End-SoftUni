const baseUrl = `http://localhost:3030/jsonstore/grocery/`;
const tdBody = document.getElementById('tbody');
const loadBtn = document.getElementById('load-product');
const addBtn = document.getElementById('add-product');
const formUpdateBtn = document.getElementById('update-product');


loadBtn.addEventListener('click', loadAllProducts);
addBtn.addEventListener('click', addNewProduct);

let allProductsData = {};
let namesKeys = [];

function loadAllProducts(e) {

    e.preventDefault();

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            tdBody.innerHTML = ''
            for (let row in data) {
                let id = data[row]._id;
                let product = data[row].product;
                let count = data[row].count;
                let price = data[row].price;
                allProductsData[product] = [count, price, id];
                namesKeys.push(product);

                let trElement = document.createElement('tr');

                let nameTd = document.createElement('td');
                nameTd.setAttribute('class', 'name');
                nameTd.textContent = product;

                let countTd = document.createElement('td');
                countTd.setAttribute('class', 'count-product');
                countTd.textContent = count;

                let priceTd = document.createElement('td');
                priceTd.setAttribute('class', 'product-price');
                priceTd.textContent = price;

                let btnTd = document.createElement('td');
                btnTd.setAttribute('class', 'btn');

                let updateBtn = document.createElement('button');
                updateBtn.setAttribute('class', 'update')
                updateBtn.textContent = 'Update'

                let deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('class', 'delete')
                deleteBtn.textContent = 'Delete'

                btnTd.appendChild(updateBtn);
                btnTd.appendChild(deleteBtn);

                trElement.appendChild(nameTd)
                trElement.appendChild(countTd)
                trElement.appendChild(priceTd)
                trElement.appendChild(btnTd)

                tdBody.appendChild(trElement);

            }

        })

}

function addNewProduct(event) {
    let name = document.getElementById('product').value;
    let count = document.getElementById('count').value;
    let price = document.getElementById('price').value;
    if (name === '' || count === '' || price === '') {
        event.preventDefault()

        return;
    }

    console.log(name)
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            'product': name,
            'count': count,
            'price': price
        })
    })

    loadAllProducts(е)
}


tdBody.addEventListener('click', function onBtn(event) {
    if (event.target.textContent === 'Delete') {
        let currnetProduct = event.target.parentNode.parentNode.children[0].textContent;
        let id = '';
        for (let name in allProductsData) {
            if (name === currnetProduct) {
                id = allProductsData[name][2];
                break;
            }
        }
        console.log(id)
        let delUrl = `${baseUrl}${id}`
        fetch(delUrl, {
            method: "DELETE",
            headers: {
                'content-type': 'text'
            },
        })

        loadAllProducts(e);
    }


})

tdBody.addEventListener('click', function onBtn(event) {
    if (event.target.textContent === 'Update') {
        console.log(event.target)
        let currnetProduct = event.target.parentNode.parentNode.children[0].textContent;
        let Oldcount = allProductsData[currnetProduct][0];
        let Oldprice = allProductsData[currnetProduct][1];
        let id = allProductsData[currnetProduct][2];
        let name = document.getElementById('product');
        let count = document.getElementById('count');
        let price = document.getElementById('price');
        name.value = currnetProduct;
        count.value = Oldcount;
        price.value = Oldprice;

        // if (name === '' || count === '' || price === '') {
        //     event.preventDefault()
        //     return;
        // }
        formUpdateBtn.disabled = false;
        addBtn.disabled = true;

        formUpdateBtn.addEventListener('click', function () {
            let patchURL = `${baseUrl}${id}`
            let name = document.getElementById('product');
            let count = document.getElementById('count');
            let price = document.getElementById('price');
            fetch(patchURL, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    'product': name.value,
                    'count': count.value,
                    'price': price.value
                })
            })
            name.value = '';
            count.value = '';
            price.value = '';
            loadAllProducts(e);


        })



    }


})



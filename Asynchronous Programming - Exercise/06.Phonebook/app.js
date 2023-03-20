// function attachEvents() {
//     const baseUrl = 'http://localhost:3030/jsonstore/phonebook'

//     const phonebook = document.getElementById('phonebook');
//     const inputId = document.getElementById('person');
//     const inputPhone = document.getElementById('phone');

//     const loadBtn = document.getElementById('btnLoad');
//     const createBtn = document.getElementById('btnCreate');

//     loadBtn.addEventListener('click', load);
//     createBtn.addEventListener('click', createNewContact);

//     load()
//     let personIds = {};

//     function load() {
//         phonebook.innerHTML = "";
//         fetch(baseUrl)
//             .then(response => response.json())
//             .then(data => {
//                 for (let obj in data) {
//                     personIds[data[obj]['person']] = data[obj]['_id'];
//                     let newLi = document.createElement('li');
//                     newLi.textContent = `${data[obj]['person']}: ${data[obj]['phone']}`
//                     let deleteBtn = document.createElement('button');
//                     deleteBtn.textContent = 'Delete';
//                     newLi.appendChild(deleteBtn);
//                     phonebook.appendChild(newLi);

//                     deleteBtn.addEventListener('click', deleteContact);
//                 }
//             })

//     }


//     function createNewContact() {
//         let person = inputId.value;
//         let phone = inputPhone.value;

//         fetch(baseUrl, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 'person': person,
//                 'phone': phone
//             })
//         })
//         inputId.value = '';
//         inputPhone.value = '';
//         document.location.reload();
//     }


//     function deleteContact(e) {
//         let contactInfo = e.target.parentNode.textContent;
//         let person = contactInfo.split(':')[0];
//         let id = personIds[person];
//         let deleteUrl = `${baseUrl}/${id}`;
//         fetch(deleteUrl, {
//             method: "DELETE",
//         })
//         e.target.parentNode.textContent = 'Contact Deleted';
//     }
// }

// attachEvents();

/////////////////////////////////

function attachEvents() {
    const url = `http://localhost:3030/jsonstore/phonebook`;
 
    const ul = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');
 
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
 
    loadBtn.addEventListener('click',onClickLoad);
    createBtn.addEventListener('click',onClickCreate);
 
    async function onClickLoad(){
        ul.innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();
 
        Object.values(data).forEach( x => {
            const { person, phone, _id} = x;
 
            const li = createElement('li',`${person}: ${phone}`,ul);
            li.setAttribute('id',_id);
 
            const deleteBtn = createElement('button','Delete',li);
            deleteBtn.setAttribute('id','btnDelete');
            deleteBtn.addEventListener('click',onClickDelete);
        })
    }
    async function onClickDelete(ev){
        const id = ev.target.parentNode.id;
        ev.target.parentNode.remove();
 
        const deleteResponse = await fetch(`${url}/${id}`,{
            method: 'DELETE',
        });
    }
     async function onClickCreate(){
 
        if(person.value !== '' && phone.value !== ''){
 
            const response = await fetch(url,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({person:person.value,phone:phone.value})
            });
            loadBtn.click();
 
            person.value = '';
            phone.value = '';
 
        }
 
    }
 
    function createElement(type, text, appender){
        const result = document.createElement(type);
 
        result.textContent = text;
 
        appender.appendChild(result);
 
        return result;
 
    }
 
}
 
attachEvents();
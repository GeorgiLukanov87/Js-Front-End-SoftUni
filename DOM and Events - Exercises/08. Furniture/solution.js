// function solve() {
//   let textArea = document.querySelector('textarea');
//   let btnsElements = Array.from(document.querySelectorAll('button'));
//   let tableBodyElement = document.querySelector('tbody')
//   let generateBtnEl = btnsElements[0];
//   let buyBtnEl = btnsElements[1];

//   generateBtnEl.addEventListener('click', generateFunc)

//   function generateFunc(event) {
//     console.log(event.target)
//     let myobjs = JSON.parse(textArea.value);
//     let productInfo = [];
//     for (const currObj of myobjs) {
//       for (const [key, value] of Object.entries(currObj)) {
//         productInfo.push(value)
//       }
//       let newTr = document.createElement('tr')
//       // NEW Img td
//       let tdImg = document.createElement('td');
//       let img = document.createElement('img');
//       img.src = productInfo[0];
//       tdImg.appendChild(img)
//       // NEW Name Paragraph td
//       let tdName = document.createElement('td');
//       let pName = document.createElement('p');
//       pName.textContent = productInfo[1];
//       tdName.appendChild(pName)
//       // NEW Price Paragraph td
//       let tdPrice = document.createElement('td');
//       let pPrice = document.createElement('p');
//       pPrice.textContent = productInfo[2];
//       tdPrice.appendChild(pPrice)
//       // NEW Factor Paragraph td
//       let tdFactor = document.createElement('td');
//       let pFactor = document.createElement('p');
//       pFactor.textContent = productInfo[3]
//       tdFactor.appendChild(pFactor)
//       // NEW Checkbox input td
//       let tdCheckBox = document.createElement('td')
//       let inputEl = document.createElement('input')
//       inputEl.type = 'checkbox'
//       tdCheckBox.appendChild(inputEl)
//       // Attaching all new td elements to the tr element , then tr to tbody(parent)
//       newTr.appendChild(tdImg);
//       newTr.appendChild(tdName);
//       newTr.appendChild(tdPrice);
//       newTr.appendChild(tdFactor);
//       newTr.appendChild(tdCheckBox);
//       tableBodyElement.appendChild(newTr)
//       productInfo = [];

//     }

//   }


//   buyBtnEl.addEventListener('click', buyFunc)

//   function buyFunc() {
//     let tableDetailsElements = document.querySelector('tbody tr')
//     console.log(typeof tableDetailsElements)
//     let inputEl = tableDetailsElements.querySelector('input')
//     console.log(inputEl)


//   }

// }

// -----------------------------------------------------------------------------------------------

// function solve() {
//   let textarea = document.querySelectorAll('textarea');
//   let tbody = document.querySelector('tbody');

//   [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', execute));
//   function execute(btn) {
//     if (!textarea[0].value) return;
//     if (btn.target.textContent === 'Generate') {
//       let input = JSON.parse(textarea[0].value);
//       input.forEach(furniture => {
//         tbody.innerHTML += `<tr>
//           <td><img src=${furniture.img}></td>
//           <td><p>${furniture.name}</p></td>
//           <td><p>${furniture.price}</p></td>
//           <td><p>${furniture.decFactor}</p></td>
//           <td><input type="checkbox"/></td>
//           </tr>`
//       })
//     } else {
//       let furnitureName = [];
//       let totalPrice = 0;
//       let averageDecFactor = 0;
//       [...document.querySelectorAll('input:checked')]
//         .forEach(furniture => {
//           let parentRow = furniture.parentNode.parentNode;
//           averageDecFactor += Number(parentRow.children[3].textContent);
//           totalPrice += Number(parentRow.children[2].textContent);
//           furnitureName.push(parentRow.children[1].textContent);
//         });
//       textarea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
//       textarea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
//       textarea[1].textContent += `Average decoration factor: ${averageDecFactor / furnitureName.length}`;
//     }
//   }
// }


// -----------------------------------------------------------------------------------------------



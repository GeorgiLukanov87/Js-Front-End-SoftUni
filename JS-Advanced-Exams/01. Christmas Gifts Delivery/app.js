function solution() {
    let sections = document.querySelectorAll('section');
    let addBtn = sections[0].children[1].children[1];
    let inputField = sections[0].children[1].children[0];

    addBtn.addEventListener('click', addGift);
    let allGifts = [];

    function addGift() {
        let giftName = inputField.value;
        allGifts.push(giftName);
        let listOfGiftSec = sections[1].querySelector('ul');
        let sortedGifts = allGifts.sort((a, b) => a.localeCompare(b));
        listOfGiftSec.innerHTML = '';

        for (let i = 0; i < sortedGifts.length; i++) {
            let newLi = document.createElement('li');
            newLi.classList.add('gift');
            newLi.textContent = sortedGifts[i];

            let sendBtn = createCustomBtn('sendButton', 'Send', newLi);
            sendBtn.addEventListener('click', sendGift)
            let discardBtn = createCustomBtn('discardButton', 'Discard', newLi);
            discardBtn.addEventListener('click', discartGift);

            newLi.appendChild(sendBtn);
            newLi.appendChild(discardBtn);
            listOfGiftSec.appendChild(newLi);
        }

        inputField.value = '';
    }

    function sendGift(e) {
        let currentItem = e.target.parentNode
        let sendGifts = sections[2].querySelector('ul');
        Array.from(currentItem.querySelectorAll('button')).forEach(bnt => { bnt.remove() });
        updateGiftList(currentItem.textContent)
        sendGifts.appendChild(currentItem);
    }

    function discartGift(e) {
        let currentItem = e.target.parentNode
        let discartedGifts = sections[3].querySelector('ul');
        Array.from(currentItem.querySelectorAll('button')).forEach(bnt => { bnt.remove() });
        updateGiftList(currentItem.textContent)
        discartedGifts.appendChild(currentItem);
    }

    function updateGiftList(item) {
        let index = allGifts.indexOf(item);
        allGifts.splice(index, 1);
    }

    function createCustomBtn(id, content, parent) {
        let newBtn = document.createElement('button');
        newBtn.id = id;
        newBtn.textContent = content;
        parent.appendChild(newBtn);
        return newBtn;
    }
}
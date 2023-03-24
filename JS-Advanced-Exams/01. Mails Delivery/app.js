function solve() {
    const recipientNameElement = document.getElementById('recipientName');
    const titleElement = document.getElementById('title');
    const messageElement = document.getElementById('message');

    document.getElementById('add').addEventListener('click', addMail);
    document.getElementById('reset').addEventListener('click', resetFields);

    const listOfMails = document.getElementById('list');
    const sentMails = document.querySelector('.sent-list');
    const deletedMails = document.querySelector('.delete-list')

    function addMail(e) {
        e.preventDefault();
        if (recipientNameElement.value == '' || titleElement.value == '' || messageElement.value == '') {
            alert('Fill all inputs')
            return;
        }
        let li = document.createElement('li');
        let div = document.createElement('div');
        div.id = 'list-action';

        let sendBtn = document.createElement('button');
        sendBtn.textContent = 'Send';
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');

        div.appendChild(sendBtn);
        div.appendChild(deleteBtn);

        customHTMLelement('h4', titleElement.value, '', 'Title', li);
        customHTMLelement('h4', recipientNameElement.value, '', 'Recipient Name', li);
        customHTMLelement('span', messageElement.value, '', '', li);
        li.appendChild(div);
        listOfMails.appendChild(li);

        sendBtn.addEventListener('click', sendMail);
        deleteBtn.addEventListener('click', deleteMail);
        resetFields(e);
    }

    function sendMail(e) {
        let newLi = e.currentTarget.parentNode.parentNode;
        let sentName = newLi.children[0].textContent;
        let sentTitle = newLi.children[1].textContent.replace('Recipient Name', 'To');

        let liContainer = document.createElement('li');
        customHTMLelement('span', sentTitle, '', '', liContainer);
        customHTMLelement('span', sentName, '', '', liContainer);
        let btnsDiv = document.createElement('div');
        btnsDiv.classList.add('btn');
        let delSentMailbtn = customHTMLelement('button', 'Delete');
        delSentMailbtn.setAttribute('type', 'submit')
        delSentMailbtn.classList.add('delete');
        btnsDiv.appendChild(delSentMailbtn);
        liContainer.appendChild(btnsDiv);

        sentMails.appendChild(liContainer);
        newLi.remove();
        delSentMailbtn.addEventListener('click', deleteMail)
    }

    function deleteMail(e) {
        let newLi = e.currentTarget.parentNode.parentNode;
        let sentName = newLi.children[0].textContent;
        let sentTitle = newLi.children[1].textContent.replace('Recipient Name', 'To');

        let deletedLi = document.createElement('li');
        customHTMLelement('span', sentName, '', '', deletedLi)
        customHTMLelement('span', sentTitle, '', '', deletedLi)
        deletedMails.appendChild(deletedLi);
        newLi.remove();
    }

    function resetFields(e) {
        e.preventDefault();
        recipientNameElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    }

    function customHTMLelement(type, content, id, moreInfo, parent) {
        let newEl = document.createElement(type);
        if (moreInfo) {
            newEl.textContent = `${moreInfo}: ${content}`;
        } else {
            newEl.textContent = `${content}`;
        }
        if (id) {
            newEl.id = id;
        }
        if (parent) {
            parent.appendChild(newEl);
        }
        return newEl;
    }

}

solve()
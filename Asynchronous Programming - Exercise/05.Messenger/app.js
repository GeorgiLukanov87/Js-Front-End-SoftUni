function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger'
    const textArea = document.getElementById('messages');
    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    const senderName = document.querySelector('#controls > div:nth-child(1) > input[type=text]')
    const senderMsg = document.querySelector('#controls > div:nth-child(2) > input[type=text]')

    senderName.value = 'Spami'
    senderMsg.value = 'Hello, George nice to see you! :)))'

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    loadMessages()

    function loadMessages() {
        fetch(url).then(response => response.json()).then(result => {
            for (let i in result) {
                console.log(result[i])
                textArea.textContent += `${result[i].author}: ${result[i].content}\n`;
            }
        })
    }


    function onSend() {
        let authorName = senderName.value
        let msgText = senderMsg.value;

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorName,
                content: msgText
            })
        })

    }

    function onRefresh() {
        textArea.textContent = ""
        let finalResult = [];
        fetch(url)
            .then(response => response.json())
            .then(result => {
                for (let i in result) {
                    console.log(result[i])
                    finalResult.push(`${result[i].author}: ${result[i].content}`);

                }
                textArea.textContent = finalResult.join('\n')
            })

        senderName.value = ""
        senderMsg.value = ""
    }

}

attachEvents();






//////////////////////

// const url = `http://localhost:3030/jsonstore/messenger`;
// const messages = document.getElementById('messages');
 
 
// function attachEvents() {
 
//     document.getElementById('submit').addEventListener('click', postMessage);
//     document.getElementById('refresh').addEventListener('click', loadAllMessages);
 
// }
 
// async function postMessage() {
 
//     const [author, content] = [document.getElementById('author'), document.getElementById('content')];
 
//     if (author.value !== '' || content.value !== '') {
//         await request(url, { author: author.value, content: content.value });
//         author.value = '';
//         content.value = '';
//     }
 
// }
 
// async function loadAllMessages() {
//     const res = await fetch(url);
//     const data = await res.json()
 
//     //messages
//     messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
 
// }
 
// async function request(url, option) {
 
//     if (option) {
//         option = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(option)
//         };
//     }
//     const response = await fetch(url, option);
 
//     return response.json();
 
// }
 
// attachEvents();
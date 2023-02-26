function focused() {
    inputElement = document.querySelectorAll('div div input')
    let activeElement = document.activeElement;


    for (inputEl of inputElement) {
        inputEl.addEventListener('focus', (e) => {
            e.currentTarget.parentNode.classList.add('focused')
        })

        inputEl.addEventListener('blur', (e) => {
            e.currentTarget.parentNode.classList.remove('focused')
        })
    }

}

// function focused() {
//     let divs = document.querySelectorAll('div div input'); // select all div elements
//     for (let div of divs) {
//         div.addEventListener('focusin', () => {
//             div.parentNode.classList.add('focused');
//         });
//         div.addEventListener('focusout', () => { // add event listener for focusout event
//             div.parentNode.classList.remove('focused'); // remove "focused" class from the div
//         });
//     }
// }



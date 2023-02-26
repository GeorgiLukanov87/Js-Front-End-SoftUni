function deleteByEmail() {
    let result = document.getElementById('result');

    let input = document.querySelector('input[name="email"]');
    let mails = Array.from(document.querySelectorAll("td:nth-child(even)"));

    targetEmelent = mails.find(x => x.textContent == input.value);

    if (targetEmelent) {
        targetEmelent.parentNode.remove();
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
    input.value = ''
}
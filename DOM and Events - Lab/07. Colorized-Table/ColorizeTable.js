function colorize() {
    items = document.querySelectorAll("tbody tr:nth-child(2),tr:nth-child(4)")
    for (item of items) {
        console.log(item)
        item.style.backgroundColor = 'teal'
    }

}
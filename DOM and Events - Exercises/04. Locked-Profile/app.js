function lockedProfile() {
    let buttonsElements = Array.from(document.querySelectorAll('.profile button'))
    buttonsElements.forEach(btn => btn.addEventListener('click', onClick))

    function onClick(event) {
        let currentProfile = event.target.parentElement
        let isLocked = currentProfile.querySelector('input[value="unlock"]').checked;
        let toShow = currentProfile.querySelector(".profile div")
        if (isLocked) {

            if (event.target.textContent === 'Show more') {
                toShow.style.display = 'block'
                event.target.textContent = 'Hide it'
            }
            else {
                toShow.style.display = 'none'
                event.target.textContent = 'Show more'
            }
        }

    }

}
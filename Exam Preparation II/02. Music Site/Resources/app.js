window.addEventListener('load', solve);

function solve() {
    // Get the form
    const form = document.querySelector('form');
    // Get input fields
    const genreInput = document.querySelector('#genre');
    const nameInput = document.querySelector('#name');
    const authorInput = document.querySelector('#author');
    const dateInput = document.querySelector('#date');
    // Get likes paragraph
    const likes = document.querySelector('#total-likes .likes p')
    var totalLikes = 0;


    // Listen for the form submit event
    form.addEventListener('submit', function (event) {
        if (!(genreInput.value === '' ||
            nameInput.value === '' ||
            authorInput.value === '' ||
            dateInput.value === '')) {
        
            event.preventDefault();
            const allHitsContainer = document.getElementsByClassName('all-hits-container')[0];
            const savedContainer = document.getElementsByClassName('saved-container')[0];

            // Create main div to wrap all the info -> img and h2s
            let newDiv = document.createElement('div');
            newDiv.classList.add('hits-info');
            // Create img tag and add img info
            let img = document.createElement('img');
            img.src = './static/img/img.png';

            // Create 4 h2 and add info -> genre , name , author , date
            let genreH2 = document.createElement('h2');
            genreH2.textContent = "Genre:" + " " + genreInput.value;

            let nameH2 = document.createElement('h2');
            nameH2.textContent = "Name:" + " " + nameInput.value;

            let authorH2 = document.createElement('h2');
            authorH2.textContent = "Author:" + " " + authorInput.value;

            let dateH3 = document.createElement('h3');
            dateH3.textContent = "Date:" + " " + dateInput.value;

            // Create 3 buttons with class names
            let saveBtn = document.createElement('button');
            saveBtn.classList.add('save-btn');
            saveBtn.textContent = 'Save song';

            let likeBtn = document.createElement('button');
            likeBtn.classList.add('like-btn');
            likeBtn.textContent = 'Like song';

            let delBtn = document.createElement('button');
            delBtn.classList.add('delete-btn');
            delBtn.textContent = 'Delete';

            // ADD all info to the div and then div to the main container
            newDiv.appendChild(img);
            newDiv.appendChild(genreH2);
            newDiv.appendChild(nameH2);
            newDiv.appendChild(authorH2);
            newDiv.appendChild(dateH3);
            // ADD buttons
            newDiv.appendChild(saveBtn);
            newDiv.appendChild(likeBtn);
            newDiv.appendChild(delBtn);

            allHitsContainer.appendChild(newDiv);
            // Clear input fields
            genreInput.value = '';
            nameInput.value = '';
            authorInput.value = '';
            dateInput.value = '';

            likeBtn.addEventListener('click', function (event) {
                event.preventDefault();
                totalLikes++;
                likes.textContent = `Total Likes: ${totalLikes}`
                likeBtn.disabled = true;

            })

            saveBtn.addEventListener('click', function (event) {
                event.preventDefault();
                savedContainer.appendChild(newDiv);
                newDiv.removeChild(saveBtn);
                newDiv.removeChild(likeBtn);
            })

            delBtn.addEventListener('click', function (event) {
                event.preventDefault();
                // event.currentTarget.parentNode.remove();
                delBtn.parentElement.remove();
            })

        } else {
            // console.log('pass');
            event.preventDefault();
        }

    }

    );

}



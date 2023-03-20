function attachEvents() {
    let postElement = document.getElementById('posts');
    const loadBtnElement = document.getElementById('btnLoadPosts');
    const viewBtnElement = document.getElementById('btnViewPost');
    const postBody = document.getElementById('post-body');
    const postTitle = document.getElementById('post-title');
    const postComments = document.getElementById('post-comments');

    loadBtnElement.addEventListener('click', loadPosts)
    viewBtnElement.addEventListener('click', viewComments)

    let getPosts = {};

    function loadPosts() {
        fetch(`http://localhost:3030/jsonstore/blog/posts`).then(response => response.json())
            .then(data => {
                postElement.innerHTML = ''
                for (let objKey in data) {
                    let value = data[objKey]["id"];
                    let body = data[objKey]["body"];
                    let title = data[objKey]['title'];
                    if (!(value in getPosts)) {
                        getPosts[value] = body
                    }

                    let newValue = document.createElement('option');
                    newValue.value = value;
                    newValue.textContent = title;

                    postElement.appendChild(newValue);
                }

            })

    }

    function viewComments() {
        fetch('http://localhost:3030/jsonstore/blog/comments').then(response => response.json())
            .then(data => {
                postComments.innerHTML = ''
                let commentKey = postElement.value;
                let commentText = postElement.options[postElement.selectedIndex].text;
                postTitle.textContent = commentText;
                for (let i in data) {
                    if (data[i]['postId'] === commentKey) {
                        let newLiComment = document.createElement('li')
                        newLiComment.setAttribute('id', data[i]['id'])
                        newLiComment.textContent = data[i]['text']
                        postComments.appendChild(newLiComment)
                        postBody.textContent = getPosts[commentKey]

                    }

                }
            })
    }


}

attachEvents();





window.addEventListener("load", solve);

function solve() {
    const titleElement = document.getElementById("task-title");
    const categoryElement = document.getElementById("task-category");
    const contentElement = document.getElementById("task-content");
    const publishBtn = document.getElementById("publish-btn");

    publishBtn.addEventListener('click', publishHandler);
    const previewListElement = document.getElementById('review-list');
    const publishListElement = document.getElementById('published-list');
    let dataObj = {};

    function publishHandler(e) {
        if (e) {
            e.preventDefault();
        }
        dataObj = {
            title: titleElement.value,
            category: categoryElement.value,
            content: contentElement.value,
        }

        if (!dataObj.title || !dataObj.category || !dataObj.content) {
            return;
        }

        let liContainer = document.createElement('li');
        liContainer.classList.add('rpost');
        let article = document.createElement('article');

        let h4Title = document.createElement('h4');
        h4Title.textContent = dataObj.title;
        let pCategory = document.createElement('p');
        pCategory.textContent = `Category: ${dataObj.category}`;
        let pContent = document.createElement('p');
        pContent.textContent = `Content: ${dataObj.content}`;

        let editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');

        let postBtn = document.createElement('button');
        postBtn.textContent = 'Post';
        postBtn.classList.add('action-btn');
        postBtn.classList.add('post');

        editBtn.addEventListener('click', editHandler);
        postBtn.addEventListener('click', postHandler);

        article.appendChild(h4Title);
        article.appendChild(pCategory);
        article.appendChild(pContent);
        liContainer.appendChild(article)
        liContainer.appendChild(editBtn)
        liContainer.appendChild(postBtn)
        previewListElement.appendChild(liContainer);

        clearAllInputFields();
    }

    function editHandler(e) {
        let item = e.target.parentNode.children[0];
        let editTitle = item.children[0].textContent
        let editCategory = item.children[1].textContent.split(': ')[1];
        let editContent = item.children[2].textContent.split(': ')[1];

        titleElement.value = editTitle;
        categoryElement.value = editCategory;
        contentElement.value = editContent;

        item.parentNode.remove();

    }

    function postHandler(e) {
        let currentTask = e.target.parentNode;
        publishListElement.appendChild(currentTask);
        Array.from(currentTask.querySelectorAll('button')).forEach(btn => {
            btn.remove();
        });
    }

    function clearAllInputFields() {
        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';
    }
}


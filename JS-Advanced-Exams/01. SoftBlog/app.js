function solve() {
   const creatorElement = document.getElementById('creator');
   const titleElement = document.getElementById('title');
   const categoryElement = document.getElementById('category');
   const contentElement = document.getElementById('content');

   const blogPostContainer = document.querySelector('body > div > div > main > section');
   const archiveSection = document.querySelector('.archive-section>ol');
   document.querySelector('button.create').addEventListener('click', createPost);
   let allTitles = [];

   let data = {};
   function createPost(e) {
      e.preventDefault();
      data = {
         creator: creatorElement.value,
         title: titleElement.value,
         category: categoryElement.value,
         content: contentElement.value,
      }

      let newArticle = document.createElement('article');
      newArticle.innerHTML = `
      <h1>${data.title}</h1>
      <p>Category:
         <strong>${data.category}</strong>
      </p>
      <p>Creator:
      <strong>${data.creator}</strong>
      </p>
      <p>${data.content}</p>`

      let btnContainerDiv = document.createElement('div');
      btnContainerDiv.classList.add('buttons');

      let delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.classList.add('btn');
      delBtn.classList.add('delete');
      delBtn.addEventListener('click', deletePost);

      let archiveBtn = document.createElement('button');
      archiveBtn.textContent = 'Archive';
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.addEventListener('click', archivePost);

      btnContainerDiv.appendChild(delBtn);
      btnContainerDiv.appendChild(archiveBtn);
      newArticle.appendChild(btnContainerDiv);

      blogPostContainer.appendChild(newArticle);
      clearInputs();

   }
   function deletePost(e) {
      e.target.parentNode.parentNode.remove();
   }

   function archivePost(e) {
      let articleToMove = e.target.parentNode.parentNode.children[0].textContent;
      allTitles.push(articleToMove);
      let sortedTitles = allTitles.sort((a, b) => a.localeCompare(b));

      archiveSection.innerHTML = '';
      for (let i = 0; i < sortedTitles.length; i++) {
         let newLi = document.createElement('li');
         newLi.textContent = sortedTitles[i];
         archiveSection.appendChild(newLi);
      }

      e.target.parentNode.parentNode.remove();
   }

   function clearInputs() {
      creatorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';
   }

}

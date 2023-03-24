window.addEventListener("load", solve);

function solve() {
  const inputFields = document.querySelectorAll('input');
  const textArea = document.getElementById('post-content');
  const publishBtn = document.getElementById('publish-btn');

  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn');

  clearBtn.addEventListener('click', clearAllPublishedList);
  let DataSaved = {};

  //When click on publish button.
  publishBtn.addEventListener('click', publishPost);
  function publishPost() {
    let title = inputFields[0].value;
    let category = inputFields[1].value;
    let content = textArea.value;
    //check is input is valid.
    if (title == '' || category == '' || content == '') {
      alert('Please fill all inputs')
      return;
    }

    // Save and reNew data every time the button publish is clicked.
    DataSaved['title'] = title;
    DataSaved['category'] = category;
    DataSaved['content'] = content;
    clearFields();

    //Create elements by using custom create html elements function.
    let li = createElement('li', '', '', '', 'rpost');
    let article = createElement('article', '', li);
    let h4 = createElement('h4', DataSaved['title'], article,);
    let p1 = createElement('p', DataSaved['category'], article, 'Category');
    let p2 = createElement('p', DataSaved['content'], article, 'Content');
    let editBtn = createElement('button', 'Edit', li, '', 'action-btn', 'edit');
    let approveBtn = createElement('button', 'Approve', li, '', 'action-btn', 'approve');
    reviewList.appendChild(li);

    editBtn.addEventListener('click', editHandler);
    approveBtn.addEventListener('click', approveHandler);
  }

  // Clear fields!
  function clearFields() {
    inputFields[0].value = '';
    inputFields[1].value = '';
    textArea.value = '';
  }

  //Edit -> extract information by current event.target and fill the input fields.
  function editHandler(e) {
    let item = e.currentTarget.parentNode.children[0]

    let title = item.children[0].textContent;
    let category = item.children[1].textContent.split('Category: ')[1];
    let content = item.children[2].textContent.split('Content: ')[1];

    inputFields[0].value = title;
    inputFields[1].value = category;
    textArea.value = content;

    e.target.parentNode.remove();
  }

  //Remove buttons from the post and add it to the published list(last section).
  function approveHandler(e) {
    let item = e.currentTarget.parentNode;
    Array.from(item.querySelectorAll('#review-list button'))
      .forEach(btn => { btn.remove(); });
    publishedList.appendChild(item);
  }

  //Clear published list.
  function clearAllPublishedList() {
    publishedList.innerHTML = ''
  }
  //Custom create html element.
  function createElement(type, content, parent, moreInfo, class1, class2) {
    let newEl = document.createElement(type);
    if (moreInfo) {
      newEl.textContent = `${moreInfo}: ${content}`;
    } else {
      newEl.textContent = `${content}`;
    }
    if (class1) {
      newEl.classList.add(class1)
    }
    if (class2) {
      newEl.classList.add(class2)
    }
    if (parent) {
      parent.appendChild(newEl);
    }
    return newEl;
  }
}

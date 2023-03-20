window.addEventListener("load", solve);

function solve() {
  let formBtn = document.getElementById('form-btn');

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');
  const previewList = document.getElementById('preview-list');
  let mainElement = document.getElementById('main');
  let bodyElement = document.querySelector('.body')

  let allInfor = [];

  formBtn.addEventListener('click', publishStory);

  function publishStory() {
    // CHECK IF ALL FIELDS ARE VALID
    let selectedGenre = genre.options[genre.selectedIndex].text;
    if (firstName.value === '' || lastName.value === '' || age.value === '' ||
      storyTitle.value === '' || story.value === '') {
      return;
    }
    allInfor.push(firstName.value)
    allInfor.push(lastName.value)
    allInfor.push(age.value)
    allInfor.push(storyTitle.value)
    allInfor.push(story.value)


    // NEW STORY HTML
    let newStoryLi = document.createElement('li');
    newStoryLi.classList.add('story-info');
    let article = document.createElement('article');

    // HMTL ELEMENTS
    let nameh4 = document.createElement('h4');
    nameh4.textContent = `Name: ${firstName.value} ${lastName.value}`;

    let ageP = document.createElement('p');
    ageP.textContent = `Age: ${age.value}`;

    let titleP = document.createElement('p');
    titleP.textContent = `Title: ${storyTitle.value}`;

    let genreP = document.createElement('p');
    genreP.textContent = `Genre : ${selectedGenre}`;

    let storyTxtP = document.createElement('p');
    storyTxtP.textContent = `${story.value}`
    // END HTML ELEMENTS

    // BUTTONS
    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn')
    saveBtn.textContent = 'Save Story'

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn')
    editBtn.textContent = 'Edit Story'

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete Story'
    // END BUTTONS

    // ATTACH ALL
    article.appendChild(nameh4);
    article.appendChild(ageP);
    article.appendChild(titleP);
    article.appendChild(genreP);
    article.appendChild(storyTxtP);

    newStoryLi.appendChild(article);
    newStoryLi.appendChild(saveBtn);
    newStoryLi.appendChild(editBtn);
    newStoryLi.appendChild(deleteBtn);

    previewList.appendChild(newStoryLi);
    // CLEAR INPUT FIELDS
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.disabled = true;
    story.value = '';
    formBtn.disabled = true;

    // ADD EVENTS ON BUTTONS
    saveBtn.addEventListener('click', saveOnClick)
    editBtn.addEventListener('click', editOnClick)
    deleteBtn.addEventListener('click', deleteOnClick)

    // SAVE STORY BTN
    function saveOnClick() {
      mainElement.remove()

      let lastBodyElement = document.createElement('div');
      lastBodyElement.setAttribute('id', 'main')

      let finalH1 = document.createElement('h1');
      finalH1.textContent = "Your scary story is saved!";

      lastBodyElement.appendChild(finalH1);
      bodyElement.appendChild(lastBodyElement);

    }

    // EDIT STORY BTN
    function editOnClick() {
      firstName.value = allInfor[0]
      lastName.value = allInfor[1]
      age.value = allInfor[2]
      storyTitle.value = allInfor[3]
      story.value = allInfor[4]
      formBtn.disabled = false;
      genre.disabled = false;
      newStoryLi.remove()
    }

    // DELETE STORY BTN
    function deleteOnClick() {
      newStoryLi.remove()
      formBtn.disabled = false;
    }
  }

}

window.addEventListener("load", solve);

// function solve() {
//   let firstNameElement = document.getElementById("first-name");
//   let lastNameElement = document.getElementById("last-name");
//   let ageElement = document.getElementById("age");
//   let storyTitleElement = document.getElementById("story-title");
//   let genreElement = document.getElementById("genre");
//   let storyElement = document.getElementById("story");
//   let publishBtnElement = document.getElementById("form-btn");
//   let previewUlElement = document.getElementById("preview-list");
//   let mainElement = document.getElementById("main");
//   let bodyElement = document.querySelector(".body");


//   publishBtnElement.addEventListener('click', onPublish);
//   function onPublish(e) {
//     e.preventDefault();
//     if (firstNameElement.value == ''
//       || lastNameElement.value == ''
//       || ageElement.value == ''
//       || storyTitleElement.value == ''
//       || storyElement.value == '') {
//       return;
//     }

//     let liElement = document.createElement("li");
//     liElement.setAttribute('class', 'story-info');

//     let articleElement = document.createElement("article");

//     let fullName = document.createElement("h4");
//     fullName.textContent = `Name: ${firstNameElement.value} ${lastNameElement.value}`;

//     let Age = document.createElement("p");
//     Age.textContent = `Age: ${ageElement.value}`;

//     let StoryTitle = document.createElement("p");
//     StoryTitle.textContent = `Title: ${storyTitleElement.value}`;

//     let Genre = document.createElement("p");
//     Genre.textContent = `Genre: ${genreElement.value}`;

//     let StoryText = document.createElement("p");
//     StoryText.textContent = `${storyElement.value}`;


//     let saveBtn = document.createElement("button");
//     saveBtn.setAttribute('class', 'save-btn');
//     saveBtn.textContent = 'Save Story';

//     let editBtn = document.createElement("button");
//     editBtn.setAttribute('class', 'edit-btn');
//     editBtn.textContent = 'Edit Story';

//     let deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute('class', 'delete-btn');
//     deleteBtn.textContent = 'Delete Story';

//     articleElement.appendChild(fullName);
//     articleElement.appendChild(Age);
//     articleElement.appendChild(StoryTitle);
//     articleElement.appendChild(Genre);
//     articleElement.appendChild(StoryText);

//     liElement.appendChild(articleElement);
//     liElement.appendChild(saveBtn);
//     liElement.appendChild(editBtn);
//     liElement.appendChild(deleteBtn);

//     previewUlElement.appendChild(liElement);


//     let editFirstName = firstNameElement.value;
//     let editLastName = lastNameElement.value;
//     let editAge = ageElement.value;
//     let editTitle = storyTitleElement.value;
//     let editStory = storyElement.value;

//     firstNameElement.value = "";
//     lastNameElement.value = "";
//     ageElement.value = "";
//     storyTitleElement.value = "";
//     storyElement.value = "";

//     publishBtnElement.disabled = true;

//     saveBtn.addEventListener("click", onSave);
//     function onSave() {
//       mainElement.remove();
//       let h1Saved = document.createElement("h1");
//       h1Saved.textContent = "Your scary story is saved!";
//       let bodyElement2 = document.createElement("div");
//       bodyElement2.setAttribute('id', 'main');
//       bodyElement.appendChild(bodyElement2);

//       bodyElement2.appendChild(h1Saved);
//     }

//     editBtn.addEventListener("click", onEdit);
//     function onEdit() {
//       firstNameElement.value = editFirstName;
//       lastNameElement.value = editLastName;
//       ageElement.value = editAge;
//       storyTitleElement.value = editTitle;
//       storyElement.value = editStory;

//       liElement.remove();
//       publishBtnElement.disabled = false;
//     }

//     deleteBtn.addEventListener("click", onDelete);
//     function onDelete() {
//       liElement.remove();
//       publishBtnElement.disabled = false;
//     }

//   }

// }

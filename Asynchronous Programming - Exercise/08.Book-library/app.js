function attachEvents() {
  let urlBooks = "http://localhost:3030/jsonstore/collections/books"
  const loadBtn = document.getElementById("loadBooks")
  const table = document.querySelector("table")
  const title = document.querySelector("input[name='title']")
  const author = document.querySelector("input[name='author']")
  const subtimBtn = document.querySelector("#form button")
  let methods = "POST"

  table.addEventListener("click", buttonsClick)
  subtimBtn.addEventListener("click", adding)
  loadBtn.addEventListener("click", loading)


  function buttonsClick(event) {
    let clickedBtn = event.target
    let book = clickedBtn.parentElement.parentElement


    if (clickedBtn.textContent === "Edit") {
      editing(book)
    }
    else if (clickedBtn.textContent === "Delete") {
      deleteing(book)

    }
  }

  function loading() {

    fetch(urlBooks)
      .then(response => response.json())
      .then((data) => {
        let tableBody = table.tBodies[0];
        tableBody.innerHTML = ""

        for (rows in data) {
          let key = rows;
          let author = data[rows]["author"];
          let title = data[rows]["title"];

          let newTr = document.createElement("tr");
          newTr.setAttribute("id", key)
          let authorTd = document.createElement("td");
          authorTd.textContent = author;

          let titleTd = document.createElement("td");
          titleTd.textContent = title;

          let buttonsTd = document.createElement("td");
          buttonsTd.innerHTML = `
        <button>Edit</button>
        <button>Delete</button>
        `;

          newTr.appendChild(titleTd);
          newTr.appendChild(authorTd);
          newTr.appendChild(buttonsTd);

          tableBody.appendChild(newTr);

        }

      })
  }

  function deleteing(id) {
    let url = `${urlBooks}/${id.id}`
    fetch(url, {
      method: "delete",
    })
  }

  function editing(books) {
    subtimBtn.textContent = "Save";
    document.querySelector("#form > h3").textContent = "Edit FORM";

    author.value = books.children[1].textContent;
    title.value = books.children[0].textContent;

    methods = "PUT"
    urlBooks = `${urlBooks}/${books.id}`

  }

  function adding() {
    subtimBtn.textContent = "Submit";
    document.querySelector("#form > h3").textContent = "FORM";

    if (author.value && title.value) {
      let newAuthor = author.value;
      let newTitle = title.value;


      data = {
        "author": newAuthor,
        "title": newTitle
      }

// what is api ?I
      fetch(urlBooks, {
        method: methods,
        headers: {
          "Content-type": "applicaiton/json"
        },
        body: JSON.stringify(data)
      })

      author.value = "";
      title.value = "";

    }


  }

}

attachEvents();
function create(words) {
   mainElement = document.getElementById('content')

   for (el of words) {
      newDiv = document.createElement('div');
      newP = document.createElement('p');
      newP.textContent = el
      newP.style.display = 'none'
      newDiv.appendChild(newP)
      mainElement.appendChild(newDiv)

   }

   divElements = document.querySelectorAll('#content div')

   for (div of divElements) {
      div.addEventListener('click', (e) => {
         if (e.currentTarget.firstChild.style.display === 'none') {
            console.log(e.currentTarget.firstChild.style.display = 'block')
         } else {
            e.currentTarget.firstChild.style.display = 'none'
         }

      })
   }


}

const domain = ``;

let inputButton = document.querySelector('.input-button');
let searchButton = document.querySelector('search-button');
let returnedImage = document.querySelector('returned-image');
let seeIngButton = document.querySelector('see-ing');
let youTubeButton = document.querySelector('youtube-button');

const getPicture async (event) => {
  event.preventDefault()
  const url = ''
  refreshSelection()
  try {
    const response = await axios.get(url)
    console.log(response.data.XXXXX);
    renderPicture(response.data.XXXXX)
  } catch (error) {
    console.log(`${error}`);
  }
}


function renderPicture(entrees) {
  entrees.forEach((entree) => {
  const 
})
}


function refreshSelection() {
  const removeOld = document.querySelector('.returned-image')
  while (removeOld.lastChild) {
removeOld.removeChild(removeOld.lastChild)
  }
}


inputButton.addEventListener('click', getPicture)

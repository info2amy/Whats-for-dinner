// ** SET UP VARIABLES: **
let inputField = document.querySelector('input');
let searchButton = document.querySelector('.search-button');
let returnedImage = document.querySelector('.returned-image');
let youTubeButton = document.querySelector('.youtube-button');
let youTubeLink = document.querySelector('.youtube-link');

// ** CALL MEALS API **
const getPicture = async () => {
  let ingredient = inputField.value
  const mainUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  // refreshSelection()
  try {
    const response = await axios.get(mainUrl)
    console.log(response.data.meals);
    renderPicture(response.data.meals)
  } catch (error) {
    console.log(`${error}`);
  }
}

// ** CALL YouTube Video API **
const getYouTube = async (id) => {
  const utubeUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  const utuberesponse = await axios.get(utubeUrl)
  console.log(utuberesponse.data.meals[0].strYoutube);
  youTubeLink.href = utuberesponse.data.meals[0].strYoutube
}

// **  RENDER PICTURE, TITLE;  SET TABLE!  **
function renderPicture(meals) {
  let i = Math.floor(Math.random() * meals.length);
  const mealPicture = meals[i].strMealThumb
  getYouTube(meals[i].idMeal)
  const imgNode = document.querySelector('.returned-image')
  imgNode.src = mealPicture
  // console.log(mealPicture);

  const mealTitle = meals[i].strMeal
  const mealTitleNode = document.querySelector('h3')
  mealTitleNode.textContent = mealTitle
  // console.log('mealTitle');

  const tableItems = document.querySelector('.picture-container')
  tableItems.classList.remove('unset-table')
}


// function refreshSelection() {
//   const removeOld = document.querySelector('.returned-image')
//   while (removeOld.lastChild) {
// removeOld.removeChild(removeOld.lastChild)
//   }
// }

searchButton.addEventListener('click', getPicture)



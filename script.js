// const DOMAIN = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken';
// const API_KEY = '';
// const BASE_URL = `${DOMAIN} ${API_KEY}`

let inputField = document.querySelector('input');
let searchButton = document.querySelector('.search-button');
let returnedImage = document.querySelector('.returned-image');
let seeIngButton = document.querySelector('.see-ing');
let youTubeButton = document.querySelector('.youtube-button');

const getPicture = async (event) => {
  event.preventDefault()
  let ingredient = inputField.value
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  // refreshSelection()
  try {
    const response = await axios.get(url)
    console.log(response.data.meals);
    renderPicture(response.data.meals)
  } catch (error) {
    console.log(`${error}`);
  }
}

function renderPicture(meals) {
  let i = Math.floor(Math.random()*meals.length);
  const mealPicture = meals[i].strMealThumb
  const imgNode = document.querySelector('.returned-image')
  imgNode.src = mealPicture
  // console.log(mealPicture);

  const mealTitle = meals[i].strMeal
  const mealTitleNode = document.querySelector('h3')
  mealTitleNode.textContent = mealTitle
  console.log('mealTitle');
}

function refreshSelection() {
  const removeOld = document.querySelector('.returned-image')
  while (removeOld.lastChild) {
removeOld.removeChild(removeOld.lastChild)
  }
}

searchButton.addEventListener('click', getPicture)


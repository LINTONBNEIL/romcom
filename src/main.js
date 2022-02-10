// Create variables targetting the relevant DOM elements here 👇
var coverTitle = document.querySelector(".cover-title")
var coverImage = document.querySelector(".cover-image")
var tagLine1 = document.querySelector(".tagline-1")
var tagLine2 = document.querySelector(".tagline-2")
var randomCoverButton = document.querySelector('.random-cover-button')
var homeButton = document.querySelector(".home-button")
var saveButton = document.querySelector(".save-cover-button")
var viewSaveButton = document.querySelector(".view-saved-button")
var makeButton = document.querySelector(".make-new-button")
var userCover = document.querySelector(".user-cover")
var userTitle = document.querySelector(".user-title")
var userDesc1 = document.querySelector(".user-desc1")
var userDesc2 = document.querySelector(".user-desc2")
var homeView = document.querySelector(".home-view")
var formView = document.querySelector(".form-view")
var saveView = document.querySelector(".saved-view")

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomCoverButton.addEventListener('click', randomCover)
makeButton.addEventListener('click', viewForm)
homeButton.addEventListener('click', goHome)
viewSaveButton.addEventListener('click', viewSavedPage)
// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// function newHotBook() {
//   newCover = new Cover {
//     covers[getRandomIndex(covers)],
//     titles[getRandomIndex(titles)],
//     descriptors[getRandomIndex(descriptors)],
//     descriptors[getRandomIndex(descriptors)]
//   }
// }
// newHotBook();

function randomCover() {
coverTitle.innerText = getRandomIndex(titles);
tagLine1.innerText = getRandomIndex(descriptors);
tagLine2.innerText = getRandomIndex(descriptors);
coverImage.src = getRandomIndex(covers);
}
randomCover();

function viewForm() {
homeView.classList.add("hidden")
formView.classList.remove("hidden")
homeButton.classList.remove("hidden")
randomCoverButton.classList.add("hidden")
saveButton.classList.add("hidden")
}

function goHome() {
  homeView.classList.remove("hidden")
  formView.classList.add("hidden")
  homeButton.classList.add("hidden")
  randomCoverButton.classList.remove("hidden")
  saveButton.classList.remove("hidden")
  }

function viewSavedPage() {
  saveView.classList.remove("hidden")
  formView.classList.add("hidden")
  homeView.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  saveButton.classList.add("hidden")
}

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
var savedCoversSection = document.querySelector(".saved-covers-section");
var makeNewBookButton = document.querySelector(".create-new-book-button")
var deleteSavedCover;


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

randomCover();

randomCoverButton.addEventListener('click', randomCover)
makeButton.addEventListener('click', viewForm)
homeButton.addEventListener('click', goHome)
viewSaveButton.addEventListener('click', viewSavedArrayData)
saveView.addEventListener('dblclick', deleteBook)

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function makeMyBook(newUserCover, newUserTitle, newUserDesc1, newUserDesc2) {
currentCover = new Cover(newUserCover, newUserTitle, newUserDesc1, newUserDesc2)
};

function pushToArray() {
  covers.push(currentCover.cover);
  titles.push(currentCover.title);
  descriptors.push(currentCover.tagline1);
  descriptors.push(currentCover.tagline2);
};

makeNewBookButton.addEventListener('click', function() {
  event.preventDefault();
makeMyBook(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
showNewCover();
pushToArray();
goHome();
});

function randomCover() {
  currentCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)]
  );
  showNewCover();
}

function showNewCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  tagLine1.innerText = currentCover.tagline1;
  tagLine2.innerText = currentCover.tagline2;
}

function viewForm() {
homeView.classList.add("hidden")
formView.classList.remove("hidden")
homeButton.classList.remove("hidden")
randomCoverButton.classList.add("hidden")
saveButton.classList.add("hidden")
saveView.classList.add("hidden")
savedCoversSection.classList.add("hidden")
}

function goHome() {
  homeView.classList.remove("hidden")
  formView.classList.add("hidden")
  homeButton.classList.add("hidden")
  randomCoverButton.classList.remove("hidden")
  saveButton.classList.remove("hidden")
  viewSaveButton.classList.remove("hidden")
  saveView.classList.add("hidden")
  }

function viewSavedPage() {
  saveView.classList.remove("hidden")
  formView.classList.add("hidden")
  homeView.classList.add("hidden")
  randomCoverButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  saveButton.classList.add("hidden")
  viewSaveButton.classList.add("hidden")
}

saveButton.addEventListener('click', noDuplicates)

function hideSaveView() {
  saveView.classList.add("hidden")
}

function viewSavedArray() {
  var displaySavedCovers = "";
  for (let i = 0; i < savedCovers.length; i++) {
    displaySavedCovers +=
    `<section class='mini-cover'>
    <img class="cover-image" id="${savedCovers[i].id}" src="${savedCovers[i].cover}">
     <h2 class="cover-title">${savedCovers[i].title}</h2>
     <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
     </section>`;
    }
    savedCoversSection.innerHTML = displaySavedCovers;
}

function noDuplicates() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
  }
}

function viewSavedArrayData() {
  viewSavedPage();
  viewSavedArray();
}

function deleteBook(event) {
  var coverID = parseInt(event.target.id)
  for (let i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id === coverID)
      {savedCovers.splice(i, 1)}
      viewSavedArrayData();
  }
}

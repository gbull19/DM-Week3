console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = "http://localhost:4000/"

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

const getAllChars = (event) => {
  clearCharacters();
  axios.get(baseURL + "characters") //http://localhost:4000/characters
    .then(response => {
      console.log(response.data);
      let { data } = response;
      for (let i = 0; i < data.length; i++ ) {
        createCharacterCard(data[i]);
      }
  })
}

const getChar = (event) => {
  clearCharacters();
  axios.get(`http://localhost:4000/characters${event.target.id}`)
    .then(response => {
      createCharacterCard(response.data);
    })
}

const getCharacterAge = (event) => {
  event.preventDefault()
  console.log(ageInput.value)

  axios.get(`http://localhost:4000/character?age=${ageInput.value}`)
    .then(response => {
      clearCharacters();
      console.log(response);
      let {data} = response;
      data.forEach(charObj => {
        createCharacterCard(charObj);
      })
    })
}

const createCharacter = (event) => {
  event.preventDefault();

  let firstName = newFirstInput.value;
  let lastName = newLastInput.value;
  let gender = newGenderDropDown.value;
  let age = newAgeInput.value;
  let likes = newLikesText.value.split(",");

  let charObj = {
    firstName: firstName,
    lastName: lastName,
    gender,
    age,
    likes
  }

  axios.post(baseURL + "character", charObj)
    .then(response => {
      let {data} = response;
      data.forEach(charObj => {
        createCharacterCard(charObj)
      })
    })
}

getAllBtn.addEventListener("click", getAllChars)
  for (let i = 0; i < charBtns.length; i++) {
    charBtns[i].addEventListener("click", getChar);
}

ageForm.addEventListener("submit", getCharacterAge);

createForm.addEventListener("submit", createCharacter)
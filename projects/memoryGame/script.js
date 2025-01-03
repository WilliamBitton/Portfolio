const firstName = document.getElementById('firstName')
const numberOfPairs = document.getElementById('numberOfPairs')
const form = document.getElementById('form')
const game = document.getElementById('game')
const nameDisplay = document.getElementById('name')
const resultDisplay = document.getElementById('result')
const timerDisplay = document.getElementById('timer')
const error = document.getElementById('error')
const errorNb = document.getElementById('errorNb')
const cardArray = [
  {
    name: '1',
    img: 'img/monstre-1.svg'
  },
  {
    name: '2',
    img: 'img/monstre-2.svg'
  },
  {
    name: '3',
    img: 'img/monstre-3.svg'
  },
  {
    name: '4',
    img: 'img/monstre-4.svg'
  },
  {
    name: '5',
    img: 'img/monstre-5.svg'
  },
  {
    name: '6',
    img: 'img/monstre-6.svg'
  },
  {
    name: '7',
    img: 'img/monstre-7.svg'
  },
  {
    name: '8',
    img: 'img/monstre-8.svg'
  },
  {
    name: '9',
    img: 'img/monstre-9.svg'
  },
  {
    name: '10',
    img: 'img/monstre-10.svg'
  }
]
const shuffledCards = []
let cardsChosen = []
let cardsChosenId = []
let score = 0
let flippedCards = 0

form.addEventListener('submit', formValidation)
firstName.addEventListener('keyup', validate)
numberOfPairs.addEventListener('keyup', validateNb)
numberOfPairs.addEventListener('change', validateNb)

function regExFirstName () {
  const pattern = /^[A-Za-z\s]{1,10}$/
  return pattern.test(firstName.value)
}

function regExnumberOfPairs () {
  const pattern = /^[2-9]$|^[1][0]$/
  return pattern.test(numberOfPairs.value)
}

function formValidation (e) {
  e.preventDefault()
  if (regExFirstName() && regExnumberOfPairs()) {
    play()
  } else if (!regExFirstName()) {
    firstName.classList.add('error')
    error.textContent = '1 à 10 lettres, pas de caractères spéciaux, pas de chiffres'
  }

  if (!regExnumberOfPairs()) {
    numberOfPairs.classList.add('error')
    errorNb.textContent = 'Minimum de 2 paires et maximum de 10 paires'
  }
}

function validate () {
  if (regExFirstName()) {
    clean()
  } else {
    firstName.classList.add('error')
    error.textContent = '1 à 10 lettres, pas de caractères spéciaux, pas de chiffres'
  }
}

function validateNb () {
  if (regExnumberOfPairs()) {
    cleanNb()
  } else {
    numberOfPairs.classList.add('error')
    errorNb.textContent = 'Minimum de 2 paires et maximum de 10 paires'
  }
}

function clean () {
  firstName.classList.remove('error')
  error.textContent = ''
}

function cleanNb () {
  numberOfPairs.classList.remove('error')
  errorNb.textContent = ''
}

function play () {
  timer()
  nameDisplay.textContent = 'Joueur: ' + firstName.value
  form.classList.add('displayNone')
  error.classList.add('displayNone')
  errorNb.classList.add('displayNone')
  game.classList.add('paddingBottom', 'marginTop')

  for (let i = 0; i < numberOfPairs.value; i++) {
    shuffledCards.push(cardArray[i])
    shuffledCards.push(cardArray[i])
  }

  shuffledCards.sort(() => 0.5 - Math.random())

  for (let i = 0; i < numberOfPairs.value * 2; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'img/monstre-cover.svg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flip)
    game.appendChild(card)
  }
}

function timer () {
  let timer = 300
  const timeOut = setTimeout(lostGame, 300000)
  const interval = setInterval(timerCount, 1000)
  timerDisplay.textContent = 'Temps restant: 5 min 00 sec'

  function timerCount () {
    if (score === shuffledCards.length / 2) {
      clearInterval(interval)
      clearTimeout(timeOut)
    } else if (timer === 0) {
      clearInterval(interval)
    } else {
      timer--
      const min = Math.floor(timer / 60)
      let sec = timer - min * 60

      if (sec < 10) {
        sec = '0' + sec
      }

      timerDisplay.textContent = 'Temps restant: ' + min + ' min ' + sec + ' sec'
    }
  }
}

function flip () {
  if (flippedCards < 2) {
    const cardId = this.getAttribute('data-id')
    this.removeEventListener('click', flip)
    this.classList.add('flipped')
    this.setAttribute('src', shuffledCards[cardId].img)
    cardsChosen.push(shuffledCards[cardId].name)
    cardsChosenId.push(cardId)
    flippedCards++

    if (cardsChosen.length === 2) {
      setTimeout(flipBack, 500)
    }
  }
}

function flipBack () {
  const cards = document.querySelectorAll('img')

  if (cardsChosen[0] === cardsChosen[1]) {
    cards[cardsChosenId[0]].classList.add('hidden')
    cards[cardsChosenId[1]].classList.add('hidden')
    score++
  } else {
    cards[cardsChosenId[0]].classList.remove('flipped')
    cards[cardsChosenId[1]].classList.remove('flipped')
    cards[cardsChosenId[0]].setAttribute('src', 'img/monstre-cover.svg')
    cards[cardsChosenId[1]].setAttribute('src', 'img/monstre-cover.svg')
    cards[cardsChosenId[0]].addEventListener('click', flip)
    cards[cardsChosenId[1]].addEventListener('click', flip)
  }

  cardsChosen = []
  cardsChosenId = []
  flippedCards = 0

  if (score === shuffledCards.length / 2) {
    resultDisplay.textContent = 'Vous avez gagné !'
    game.classList.add('displayNone')
    resultDisplay.classList.add('paddingBottom', 'marginTop')
  }
}

function lostGame () {
  game.classList.add('displayNone')
  timerDisplay.textContent = 'Temps restant: 0 min 00 sec'
  resultDisplay.textContent = 'Vous avez perdu !'
  resultDisplay.classList.add('paddingBottom', 'marginTop')
}

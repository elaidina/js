 document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Modulus is used to get a division remainder.'
    },
    {
      name: '1',
      img: "10 % 3; // 1"
    },
    {
      name: '2',
      img: 'Exponentiation returns the result of the first operand to the power of the second.'
    },
    {
      name: '2',
      img: "2**3; // 8"
    },
    {
      name: '3',
      img: 'Increment is used to **increment** or add 1 to a value.'
    },
    {
      name: '3',
      img: " x = 10;  x++; // 11"
    },
    {
      name: '4',
      img: 'Decrement is used to **decrement** or remove 1 from a value.'
    },
    {
      name: '4',
      img: " x = 10;  x--; // 9"
    },
    {
      name: '5',
      img: 'Value assignment'
    },
    {
      name: '5',
      img: "x = 10;"
    },
    {
      name: '6',
      img: 'Addition assignment operator adds the amount on the right side.'
    },
    {
      name: '6',
      img: "x = 10;  x += 10; // 20   // Same as x = x + 10"
    },
    {
      name: '7',
      img: 'Subtraction assignment operator subtracts the amount on the right side.'
    },
    {
      name: '7',
      img: 'x = 10;      x -= 10;  // 0          // Same as x = x - 10'
    },
    {
      name: '8',
      img: 'Multiplication assignment operator multiplies the amount on the right side'
    },
    {
      name: '8',
      img: "x = 10;   x *= 10;    // 100           // Same as x = x \\* 10"
    },
    {
      name: '9',
      img: 'Division assignment operator divides the amount on the right side.'
    },
    {
      name: '9',
      img: 'x = 10; x /= 10; // 1 // Same as x = x / 10'
    },
    {
      name: '10',
      img: 'Modulo assignment operator gets division remainder of the amount on the right side'
    },
    {
      name: '10',
      img: 'x = 10; x %= 10; // 0 // Same as x = x % 10'
    },
    {
      name: '11',
      img: 'Exponentiation assignment operator gets exponent of the amount on the right side'
    },
    {
      name: '11',
      img: "x = 10; x **= 10; // 100 // Same as x = x \*\* 10"
    },
    {
      name: '12',
      img: 'Equal to operator - The following will return true even if the types do not match'
    },
    {
      name: '12',
      img: "2 == 2 // true 2 == '2' // true"
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 3 completed!</h2><a href="https://elaidina.github.io/js/level4.html"> Continue to Level 4</a>';


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})

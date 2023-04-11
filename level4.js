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
      img: 'Not equal to operator - returns true if not equalo, I don´t have any bottle.'
    },
    {
      name: '3',
      img: "2 != 2 // false     2 != '2' // false"  },
    {
      name: '4',
      img: 'Not equal value & equal type'
    },
    {
      name: '4',
      img: "2 !== 2 //false      2 !== '2' //true"
    },
    {
      name: '5',
      img: 'Greater than'
    },
    {
      name: '5',
      img: "10 > 5 // true"
    },
    {
      name: '6',
      img: 'Less than'
    },
    {
      name: '6',
      img: "10 < 5 // false"
    },
    {
      name: '7',
      img: 'Greater than or equal'
    },
    {
      name: '7',
      img: "10 >= 5 // true"
    },
    {
      name: '8',
      img: 'Less than or equal'
    },
    {
      name: '8',
      img: "10 <= 5 // false"
    },
    {
      name: '9',
      img: 'the `==` operator is used to compare values. The `===` operator is used to compare values and types'
    },
    {
      name: '9',
      img: "== vs ==="
    },
    {
      name: '10',
      img: "if we use the **+** operator on the **number** 5 and a **string** with the character '5', we get a **string** of 55"
    },
    {
      name: '10',
      img: "5 + '5'; // 55(string)"
    },
    {
      name: '11',
      img: "if I wanted to add these together, I would first convert the string '55' to a number like this"
    },
    {
      name: '11',
      img: "5 + Number('5'); // 10"
    },
    {
      name: '12',
      img: 'null is coerced to a number of 0'
    },
    {
      name: '12',
      img: '5 + null; // 5'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 4 completed!</h2><a href='https://elaidina.github.io/js/level5.html'> Continue to Level 5</a>";


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

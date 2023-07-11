document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'String'
    },
    {
      name: '1',
      img: "A sequence of characters. In JavaScript, strings can be enclosed within the single or double quotes."
    },
    {
      name: '2',
      img: 'Represent both integer and floating-point numbers.'
    },
    {
      name: '2',
      img: "Number"
    },
    {
      name: '3',
      img: 'Boolean'
    },
    {
      name: '3',
      img: "Represent a logical entity and can have two values: true or false."
    },
    {
      name: '4',
      img: 'Null'
    },
    {
      name: '4',
      img: "Represents the intentional absence of any object value."
    },
    {
      name: '5',
      img: 'Undefined'
    },
    {
      name: '5',
      img: "A variable that has not been assigned a value is undefined."
    },
    {
      name: '6',
      img: 'Symbol'
    },
    {
      name: '6',
      img: "It is a built-in object whose constructor returns a symbol-that is unique."
    },
    {
      name: '7',
      img: 'BigInt'
    },
    {
      name: '7',
      img: "New data type used for numbers that are greater than the Number type can handle."
    },
    {
      name: '8',
      img: "**type conversion** or **type casting**"
    },
    {
      name: '8',
      img: 'the process of explicitly converting a value from one type to another'
    },
    {
      name: '9',
      img: 'We can convert it to a number type with the `parseInt()` function'
    },
    {
      name: '9',
      img: "  amount = parseInt(amount);   "
    },
    {
      name: '10',
      img: 'If we want to convert it back to a string, we can use the `toString()` method'
    },
    {
      name: '10',
      img: "amount = amount.toString();"
    },
    {
      name: '11',
      img: 'Addition, subtraction, multiplication and division'
    },
    {
      name: '11',
      img: "Arithmetic Operators"
    },
    {
      name: '12',
      img: 'Concatenation'
    },
    {
      name: '12',
      img: "The `+` operator can also be used to put 2 or more strings together. The use of `+` depends on the data type."
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

cards[optionOneId].parentElement.classList.remove("green")
      

      

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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 2 completed!</h2><a href="https://elaidina.github.io/js/level3.html"> Continue to Level 3</a>'


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

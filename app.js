document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray =  [
    {
      name: '1',
      img: 'Declaring a Variable'
    },
    {
      name: '1',
      img: "let firstName = 'John';"
    },
    {
      name: '2',
      img: 'Variable Naming Conventions'
    },
    {
      name: '2',
      img: "Only letters, numbers, underscores and dollar signs, ...can not start with a number"
    },
    {
      name: '3',
      img: 'Reassigning Values'
    },
    {
      name: '3',
      img: "let x = 100; x = 200;"
    },
    {
      name: '4',
      img: "const person = {name: 'Brad',}; person.name = 'John'; "},
    {
      name: '4',
      img: "The object itself can be manipulated, even with const."
    },
    {
      name: '5',
      img: 'Declaring multiple values at once'
    },
    {
      name: '5',
      img: "let a, b, c;    const d = 10, e = 20, f = 30;"
    },
    {
      name: '6',
      img: 'Let or Const - Which to Use?'
    },
    {
      name: '6',
      img: "use `const` unless it's a primitive value that I think I may need to re-assign at some point"
    },
    {
      name: '7',
      img: 'Primitive Types'
    },
    {
      name: '7',
      img: "Stored directly in the location that the variables is accessed"
    },
    {
      name: '8',
      img: 'Reference Types (Objects)'
    },
    {
      name: '8',
      img: "Accessed by reference"
    },
    {
      name: '9',
      img: 'TypeScript'
    },
    {
      name: '9',
      img: "const y:number = 100"
    },
    {
      name: '10',
      img: "To check the type of a variable in JavaScript, you can use the typeof operator"
    },
    {
      name: '10',
      img: 'console.log(typeof name)'
    },
    {
      name: '11',
      img: 'Reference Data Types (Objects)'
    },
    {
      name: '11',
      img: "Arrays, Object Literals, Functions"
    },
    {
      name: '12',
      img: "const sayHello = function() { return 'Hello'; }"
    },
    {
      name: '12',
      img: "Functions are also objects in JavaScript. They can have `properties` and `methods`. "
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 1 completed!</h2><a href="https://elaidina.github.io/js/level2.html"> Continue to Level 2</a>'


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

document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: "what are the boolean values of true and false as a number"
    },
    {
      name: '1',
      img: "Number(true); // 1      Number(false); // 0"
    },
    {
      name: '2',
      img: 'NaN or **not a number**'
    },
    {
      name: '2',
      img: "5 + undefined; // NaN"
    },
    {
      name: '3',
      img: 'This is because not all NaN numbers are created equal.'
    },
    {
      name: '3',
      img: "NaN == NaN // false"
    },
    {
      name: '4',
      img: '5 + NaN; // NaN'
    },
    {
      name: '4',
      img: "NaN is the result of a failed number operation"
    },
    {
      name: '5',
      img: 'isNan(NaN); // true'
    },
    {
      name: '5',
      img: "isNan('Hello') // true"
    },
    {
      name: '6',
      img: 'If you really want to check for the specific value of NaN, you can use the isNan method on the Number object.'
    },
    {
      name: '6',
      img: "Number.isNan(NaN) // true      Number.isNaN('Hello') //false"
    },
    {
      name: '7',
      img: 'Concatenation'
    },
    {
      name: '7',
      img: "'Hello, my name is ' + name + ' and I am ' + age + ' years old';"
    },
    {
      name: '8',
      img: 'Template Literals'
    },
    {
      name: '8',
      img: "`Hello, my name is ${name} and I am ${age} years old`;"
    },
    {
      name: '9',
      img: "const s = new String('Hello World');"
    },
    {
      name: '9',
      img: "We can actually create a string object ourselves by using the `new` keyword and then the `String constructor`"
    },
    {
      name: '10',
      img: 'console.log(s[3]); // prints "l"'
    },
    {
      name: '10',
      img: 'We get the letter "l" because it is the letter at index 3.'
    },
    {
      name: '11',
      img: 'You can also access the prototype directly'
    },
    {
      name: '11',
      img: 'console.log(s.__proto__);'
    },
    {
      name: '12',
      img: 'Length is pretty common for multiple data types. On an array, it will tell us the number of elements in it. '
    },
    {
      name: '12',
      img: "const greeting = 'Hello World';      greeting.length; // 11"
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 5 completed!</h2><a href='https://elaidina.github.io/js/level6.html'> Continue to Level 6</a>";


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

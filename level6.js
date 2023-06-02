document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Changing case'
    },
    {
      name: '1',
      img: "greeting.toUpperCase(); greeting.toLowerCase();"
    },
    {
      name: '2',
      img: 'Returns the character at the specified index.'
    },
    {
      name: '2',
      img: "greeting.charAt(0);"
    },
    {
      name: '3',
      img: 'we pass the value and it will give us the index of the first occurrence of the character(s)'
    },
    {
      name: '3',
      img: 'indexOf()'
    },
    {
      name: '4',
      img: 'greeting.substring(0, 4); // Hell'
    },
    {
      name: '4',
      img: "we want to pull out a substring of 'Hell' from 'Hello World', we would start at character 0 and go 4 in length"
    },
    {
      name: '5',
      img: 'Extracts a part of a string and returns a new string.'
    },
    {
      name: '5',
      img: "greeting.slice(0, 4); // Hell      //  We can also use negative numbers      greeting.slice(-11, -7) // Hell"
    },
    {
      name: '6',
      img: 'Trim the whitespace of a string.'
    },
    {
      name: '6',
      img: "x = '       Hello World!        ';      x = x.trim(); // Hello World!"
    },
    {
      name: '7',
      img: 'Replace all instances of a string'
    },
    {
      name: '7',
      img: "const url = 'media.com';      url.replace('media', 'google'); // google.com" 
    },
    {
      name: '8',
      img: 'The pears and apricots are not ripe yet.'
    },
    {
      name: '8',
      img: 'Hrušky a marhule ešte nie sú zrelé.'
    },
    {
      name: '9',
      img: 'Here´s your plate, fork, cup and spoon.'
    },
    {
      name: '9',
      img: 'Tu máš tanier, vidličku, pohár a lyžicu.'
    },
    {
      name: '10',
      img: 'Is this your bag or not?'
    },
    {
      name: '10',
      img: 'Je to tvoja taška alebo nie?'
    },
    {
      name: '11',
      img: 'My doll has got big blue eyes and long hair.'
    },
    {
      name: '11',
      img: 'Moja bábika má veľké modré oči a dlhé vlasy.'
    },
    {
      name: '12',
      img: 'Let´s take scissors and cut out a heart.'
    },
    {
      name: '12',
      img: "Vezmime si nožnice a vystrihneme srdce."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 6 completed!</h2><a href='https://elaidina.github.io/js/level7.html'> Continue to Level 7</a>";


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

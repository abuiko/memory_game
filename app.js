document.addEventListener("DOMContentLoaded", () => {

    const cardArray = [{
            name: 'baloons',
            img: 'img/baloons.png'
        },
        {
            name: 'cosmo',
            img: 'img/cosmo.png'
        },
        {
            name: 'power',
            img: 'img/power.png'
        },
        {
            name: 'tea',
            img: 'img/tea.png'
        },
        {
            name: 'ufo',
            img: 'img/ufo.png'
        },
        {
            name: 'message',
            img: 'img/message.png'
        },
        {
            name: 'baloons',
            img: 'img/baloons.png'
        },
        {
            name: 'cosmo',
            img: 'img/cosmo.png'
        },
        {
            name: 'power',
            img: 'img/power.png'
        },
        {
            name: 'tea',
            img: 'img/tea.png'
        },
        {
            name: 'ufo',
            img: 'img/ufo.png'
        },
        {
            name: 'message',
            img: 'img/message.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());
    console.log(cardArray);

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#score');

    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'img/nature.png');
            card.classList.add('cardStyle');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }



    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];
        if (optionOneId === optionTwoId) {
            alert('You have clicked the same image!');
            cards[optionOneId].setAttribute('src', 'img/nature.png');
            cards[optionTwoId].setAttribute('src', 'img/nature.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You have found a match!');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/nature.png');
            cards[optionTwoId].setAttribute('src', 'img/nature.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenIds = [];
        console.log(cardsChosenIds);
        console.log(cardsChosen);
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === 6) {
            resultDisplay.textContent = 'YOU HAVE WON!';
        }


    }


    createBoard();







})
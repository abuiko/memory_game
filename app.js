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

    const grid = document.querySelector('.grid');

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'img/nature.png');
            card.classList.add('cardStyle');
            card.setAttribute('data-id', i);
            grid.appendChild(card);
        }
    }

    createBoard();








})
let cards = [];
let sum = 0;
let hasBlackJack = false;
let hasMoney = false;
let message = "";
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let playerEl = document.getElementById('player-el');
let player = {
    name: "Money: $",
    credits: 100
};
playerEl.textContent = player.name + player.credits

function startGame(){
    hasMoney = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21) {
        message = "Blackjack!";
        hasBlackJack = true;
    }
    else{
        message = "Bust!";
        hasMoney = false;
    }
    messageEl.textContent = message;
}

function newCard(){
    if(hasMoney === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
}

function getRandomCard(){
    return Math.floor(9*Math.random()) + 2;
}

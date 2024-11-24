let cardsPlayer = []
let cardsDealer = []
let playerEl = document.getElementById("playerCards")
let dealerEl = document.getElementById("dealerCards")
let message = document.getElementById("message")
const drawButton = document.getElementById("draw-btn")
const stayButton = document.getElementById("stay-btn")


function randomInt(min, max){
    return Math.floor((Math.random() * (max-min+1) + min))
}

// Use Random int to draw random cards including face cards.
function randomCard(){
    let num = randomInt(1,13)
    if(num > 10){
        return 10
    }
    return num
}

// Print cards with total
function printCards(hand, element){
    element.textContent = ""
    let total = 0
    hand.forEach(el => {
        element.textContent += " | " + el
        total += el
    })
    element.textContent += " |  = " + total
}

// Automatically draw first 2 cards
function firstDraw(hand, element){
    let card = randomCard()
    let card2 = randomCard()
    if(card == 1 && card2 != 1){
        hand.push(11)
    }
    else{
        hand.push(card)
    }
    if(card2 == 1 && card != 1){
        hand.push(11)
    }
    else{
        hand.push(card2)
    }
    printCards(cardsPlayer, playerEl)
}

// Check if 21 in hand
function winCheck(){
    let total = 0
    cardsPlayer.forEach(el => {
        total += el
    })
    if(total == 21){
        message.textContent = "Black Jack! You win!"
        return true
    }
    return false
}

// CHeck if over 21 in hand
function bustCheck(hand){
    let total = 0
    hand.forEach(el => {
        total += el
    })
    if(total > 21){return true}
    else{return false}
}


function draw(){
    if(winCheck()){
        return
    }
    if(bustCheck(cardsPlayer)){
        return
    }
    if(cardsPlayer[0] == 11){cardsPlayer[0] = 1}
    else if(cardsPlayer[1] == 11){cardsPlayer[1]= 1} 
    let newCard = randomCard()
    cardsPlayer.push(newCard)
    printCards(cardsPlayer, playerEl)
    winCheck()
    if(bustCheck(cardsPlayer)){message.textContent = "Bust! You lose!"}
}

function stay(){
    if(winCheck()){
        return
    }
    if(bustCheck(cardsPlayer)){
        return
    }
    stayButton.disabled = true
    drawButton.disabled = true
    let totalDealer = 0
    let totalPlayer = 0
    cardsPlayer.forEach(element => {
        totalPlayer += element
    })
    // First hand
    firstDraw(cardsDealer, dealerEl)
    cardsDealer.forEach(element => {
        totalDealer += element
    })
    totalDealer = cardsDealer[0] + cardsDealer[1]
    while(totalDealer < 21 && totalDealer < totalPlayer){
        if(cardsDealer[0] == 11){cardsDealer[0] = 1}
        else if(cardsDealer[1] == 11){cardsDealer[1]= 1}
        let newCard = randomCard()
        cardsDealer.push(newCard)
        totalDealer += newCard 
    }
    printCards(cardsDealer, dealerEl)
    console.log(totalDealer)
    if(totalDealer > 21){message.textContent = "Dealer busts! You Win!"}
    else if(totalDealer == totalPlayer){message.textContent = "Tie!"}
    else{message.textContent = "Dealer wins!"}

}

function reset(){
    stayButton.disabled = false
    drawButton.disabled = false
    cardsPlayer = []
    cardsDealer = []
    message.textContent = ""
    dealerEl.textContent = "Dealer"
    firstDraw(cardsPlayer, playerEl)
    winCheck()
}


reset()
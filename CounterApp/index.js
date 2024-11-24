let count = 0 
let countEl = document.getElementById("count-el")
let logging = document.getElementById("logging")
function increment(){
    count += 1
    countEl.textContent = count
    
}

function decrement(){
    if(count != 0){
        count -= 1
        countEl.textContent = count
    }
}

function save(){
    logging.textContent += count + " - "
}

function reset(){
    countEl.textContent = 0
    count = 0
}


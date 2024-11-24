let view = ["0", "0"]
let operation = ""
let ini = true
let index = 0
let viewEl = document.getElementById("view")
let total = 0
function nums(number){
    if(ini == true){
        viewEl.textContent = ""
        ini = false}
    switch(number){
        case 1: 
            viewEl.textContent += 1
            view[index] += "1"
            break;
        case 2: 
            viewEl.textContent += 2
            view[index] += "2"
            break;
        case 3: 
            viewEl.textContent += 3
            view[index] += "3"
            break;
        case 4: 
            viewEl.textContent += 4
            view[index] += "4"
            break; 
        case 5: 
            viewEl.textContent += 5
            view[index] += "5"
            break;
        case 6: 
            viewEl.textContent += 6
            view[index] += "6"
            break;
        case 7: 
            viewEl.textContent += 7
            view[index] += "7"
            break;
        case 8: 
            viewEl.textContent += 8
            view[index] += "8"
            break; 
        case 9: 
            viewEl.textContent += 9
            view[index] += "9"
            break; 
        case 0: 
            viewEl.textContent += 0
            view[index] += "0"
            break; 
    }
    console.log(view[index])
}


function sum(){
    if(ini == true){return}
    index += 1
    if(index > 1){
        // Do nothing
    }
    else{
        viewEl.textContent += " + "
        operation = "+"
    }
}

function multi(){
    if(ini == true){return} 
    index += 1
    if(index > 1){
        // Do nothing
    }
    else{
        viewEl.textContent += " x "
        operation = "x"
    }
}

function divide(){
    if(ini == true){return}
    index += 1
    if(index > 1){
        // Do nothing
    }
    else{
        viewEl.textContent += " / "
        operation = "/"
    }
}

function minus(){
    if(ini == true){return}
    index += 1
    if(index > 1){
        // Do nothing
    }
    else{
        viewEl.textContent += " - "
        operation = "-"
    }
}

function dot(){
    // Check if decimal is present in number
    if(view[index].includes(".")){return}
    // Add zero if decimal is first input
    if(ini == true){
        viewEl.textContent = "0"
        ini = false}
    viewEl.textContent += "."
    view[index] += "."
}

function equals(){
    // Display operation
    switch(operation){
        case "+":
            viewEl.textContent = parseFloat(view[0]) + parseFloat(view[1])
            break;
        case "x":
            viewEl.textContent = parseFloat(view[0]) * parseFloat(view[1])
            break;
        case "-":
            viewEl.textContent = parseFloat(view[0]) - parseFloat(view[1])
            break;
        case "/":
            viewEl.textContent = parseFloat(view[0]) / parseFloat(view[1])
            break;
    }
    // Reset variables
    view = ["0", "0"]
    operation = ""
    ini = true
    index = 0
}










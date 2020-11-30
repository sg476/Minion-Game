let kevinCount = 0;
let stuartCount = 0;
let count = 1;
let minionName = " ";

function startGame() {
    let valueList = [];
    for (let i = 0; i < 5; i++) {
        let value = (Math.floor(Math.random() * 10));
        if (valueList.indexOf(value) === -1) {
            valueList.push(value);
        } else {
            i -= 1;
        }
    }
    return valueList
}
function avatar(minion) {
    minionName = minion
    document.getElementById("table").hidden = false;
    document.getElementById("instructionsDiv").hidden = false;
}
function radioValue(value) {
    while(count <=10) {
        let numList = startGame();
        let minionValue1 = value;
        if (numList.indexOf(minionValue1) === -1) {
            stuartCount = stuartCount + 1;
        }
        else {
            kevinCount = kevinCount + 1;
        }
        if (count === 10) {
            calculate();
        }else{
            document.getElementById("kevinScore").innerText = "Kevin's Score: " + kevinCount;
            document.getElementById("stuartScore").innerText = "Stuart's Score: " + stuartCount;
        }
        count++
        break;
    }
}
function calculate() {
    document.getElementById("button").hidden = true;
    if (minionName === "Kevin") {
        document.getElementById("stuartTD").hidden = true;
        document.getElementById("radioTD").hidden = true;
        if (kevinCount > stuartCount) {
            document.getElementById("kevinScore").innerText = "You Won!! (Score: " + kevinCount + ")";
        }
        else if (kevinCount < stuartCount) {
            document.getElementById("kevinScore").innerText = "You Lose!! (Score: " + kevinCount + ")";
        }
        else {
            document.getElementById("kevinScore").innerText = "Draw!! Please, Restart The Game.";
        }
    } else {
        document.getElementById("kevinTD").hidden = true;
        document.getElementById("radioTD").hidden = true;
        if (kevinCount > stuartCount) {
            document.getElementById("stuartScore").innerText = "You Lose!! (Score: " + stuartCount + ")";
        }
        else if (kevinCount < stuartCount) {
            document.getElementById("stuartScore").innerText = "You Won!!  (Score: " + stuartCount + ")";
        }
        else {
            document.getElementById("stuartScore").innerText = "Draw!! Please, Restart The Game.";
        }
    }
}
alert("The Page Has AutoPlay Audio. Please Don't Be Alarmed!!")






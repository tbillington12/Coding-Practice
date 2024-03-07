
let cell = document.querySelectorAll('.row > div');
let h2 = document.getElementById("h2")
let y = 0;
let clickMe = document.getElementById("clickMe");
let end = document.querySelector('#h2');

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener("click", cellClicked);
    cell[i].addEventListener("click", xWin);
    cell[i].addEventListener("click", oWin);
    cell[i].addEventListener("click", draw);
}

clickMe.addEventListener("click", reset)





function cellClicked() {
    if (y == 0 || y == 2 || y == 4 || y == 6 || y == 8) {
        event.target.textContent = "X";
        y++;
        console.log(cell)


    } else if (y == 1 || y == 3 || y == 5 || y == 7) {
        event.target.textContent = "O";
        y++;

    }
}



function xAlert() {
    window.setTimeout(() => {
        alert("X WINS!!");
    }, 500);
}
function oAlert() {
    window.setTimeout(() => {
        alert("O WINS!!");
    }, 500);
}


function xWin() {
    if (cell[0].innerText == "X" && cell[1].innerText == "X" && cell[2].innerText == "X") {
        xWinCode();
    } else if (cell[3].innerText == "X" && cell[4].innerText == "X" && cell[5].innerText == "X") {
        xWinCode();
    } else if (cell[6].innerText == "X" && cell[7].innerText == "X" && cell[8].innerText == "X") {
        xWinCode();
    } else if (cell[0].innerText == "X" && cell[3].innerText == "X" && cell[6].innerText == "X") {
        xWinCode();
    } else if (cell[1].innerText == "X" && cell[4].innerText == "X" && cell[7].innerText == "X") {
        xWinCode();
    } else if (cell[2].innerText == "X" && cell[5].innerText == "X" && cell[9].innerText == "X") {
        xWinCode();
    } else if (cell[0].innerText == "X" && cell[4].innerText == "X" && cell[8].innerText == "X") {
        xWinCode();
    } else if (cell[2].innerText == "X" && cell[4].innerText == "X" && cell[6].innerText == "X") {
        xWinCode();
    }
}
function oWin() {
    if (cell[0].innerText == "O" && cell[1].innerText == "O" && cell[2].innerText == "O") {
        oWinCode();
    } else if (cell[3].innerText == "O" && cell[4].innerText == "O" && cell[5].innerText == "O") {
        oWinCode();
    } else if (cell[6].innerText == "O" && cell[7].innerText == "O" && cell[8].innerText == "O") {
        oWinCode();
        document.getElementById("h2").innerHTML = "O Wins!!";
    } else if (cell[0].innerText == "O" && cell[3].innerText == "O" && cell[6].innerText == "O") {
        oWinCode();
        document.getElementById("h2").innerHTML = "O Wins!!";
    } else if (cell[1].innerText == "O" && cell[4].innerText == "O" && cell[7].innerText == "O") {
        oWinCode();
        document.getElementById("h2").innerHTML = "O Wins!!";
    } else if (cell[2].innerText == "O" && cell[5].innerText == "O" && cell[9].innerText == "O") {
        oWinCode();
        document.getElementById("h2").innerHTML = "O Wins!!";
    } else if (cell[0].innerText == "O" && cell[4].innerText == "O" && cell[8].innerText == "O") {
        oWinCode();
        document.getElementById("h2").innerHTML = "O Wins!!";
    } else if (cell[2].innerText == "O" && cell[4].innerText == "O" && cell[6].innerText == "O") {
        oWinCode();
        document.getElementById("h2").innerHTML = "O Wins!!";
    }
}
function draw() {
    if (y == 9) {
        document.getElementById("h2").innerHTML = "Draw";

    }
}

function reset() {
    location.reload()
}

function yChange() {
    (y = 10)
    console.log("y")
}
function xWinCode() {
    document.getElementById("h2").innerHTML = "X Wins!!";
    xAlert();
    yChange();
}

function oWinCode() {
    document.getElementById("h2").innerHTML = "O Wins!!";
    oWinCode();
    yChange();
}
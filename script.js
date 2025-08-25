

let showMsg = document.querySelector(".msg-Container")
let msg = document.querySelector(".msg")
let yourScore = document.querySelector(".player");
let computerScore = document.querySelector(".computer");


let youPoint = 0;
let computerPoint = 0;

let rock = document.querySelector(".rock");
rock.addEventListener('click', () => {
    let arr = ["R", "P", "S"];
    let randomChoice = arr[Math.floor(Math.random() * arr.length)];
    if (arr[0] != randomChoice && randomChoice === arr[2]) {
        youPoint++;
        yourScore.innerText = youPoint;
        msg.innerText = "Rock Beat Scissor";
        showMsg.classList.remove("hide");
    } else if (randomChoice === arr[1]) {
        computerPoint++;
        computerScore.innerText = computerPoint;
        msg.innerText = "Paper beat Rock";
        showMsg.classList.remove("hide");
    } else {
        msg.innerText = "Draw";
        showMsg.classList.remove("hide");
    }

});

let paper = document.querySelector(".paper");
paper.addEventListener('click', () => {
    let arr = ["R", "P", "S"];
    let randomChoice = arr[Math.floor(Math.random() * arr.length)];
    if (arr[1] != randomChoice && randomChoice === arr[0]) {
        youPoint++;
        yourScore.innerText = youPoint;
        msg.innerText = "Paper beat Rock";
        showMsg.classList.remove("hide");
    } else if (randomChoice === arr[2]) {
        computerPoint++;
        computerScore.innerText = computerPoint;
        msg.innerText = "Scissor Beat paper";
        showMsg.classList.remove("hide");
    } else {
        msg.innerText = "Draw";
        showMsg.classList.remove("hide");
    }
});

let scissor = document.querySelector(".scissor");
scissor.addEventListener('click', () => {
    let arr = ["R", "P", "S"];
    let randomChoice = arr[Math.floor(Math.random() * arr.length)];
    if (arr[2] != randomChoice && randomChoice === arr[1]) {
        youPoint++;
        yourScore.innerText = youPoint;
        msg.innerText = "Scissor Beat paper";
        showMsg.classList.remove("hide");
    } else if (randomChoice === arr[0]) {
        computerPoint++;
        computerScore.innerText = computerPoint;
        msg.innerText = "Rock Beat Scissor";
        showMsg.classList.remove("hide");
    } else {
        msg.innerText = "Draw";
        showMsg.classList.remove("hide");
    }
});

let Reset = document.querySelector(".reset");
Reset.addEventListener('click', () => {
    yourScore.innerText = 0;
    computerScore.innerText = 0;
    showMsg.classList.add("hide");
});




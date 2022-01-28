console.log("Welcome To Tic Tac Toe")

let music = new Audio("game.mp3")
let audioturn = new Audio("Ting.mp3")
let gameover = new Audio("win.mp3")
let turn = "X";
let Gameover = false

// function to change turn
const changeturn = ()=> {
    return turn === "X"? "0": "X"
}
// functionto check for a win 
const checkwin = () =>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -11, 15, 90],
        [1, 4, 7, -1, 15, 90],
        [2, 5, 8, 9, 15, 90],
        [0, 4, 8, -1, 15, 45],
        [2, 4, 6, -1, 15, 135],
    ]
    wins.forEach(e =>{
       if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !=="") ){
           document.querySelector('.info').innerText ="WINNER " + boxtexts[e[0]].innerText 
           Gameover = true
           document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px"
           document.querySelector('.line').style.width = "32vw"
           document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
           music.play()

       }
    })
}
// game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if(!Gameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })  
})
// add onclick listner to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    })
    turn = "X";
    Gameover = false;
    document.querySelector('.line').style.width = "0vw" 
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px"

})
let gameSeq=[];
let userSeq=[];
let btns=["red","green","yellow","blue"];

let started=false;
let level=0;
let highestScore=-1;

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("begins.....");
        started=true;
        levelUp();
    }
})
 let h2=document.querySelector('h2');

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Current Level is ${level}`;
    let randomIdx=Math.floor(Math.random() * 3);
    let randomColor=btns[randomIdx];
    gameSeq.push(randomColor)
    let randomBtn=document.querySelector(`.${randomColor}`);
    btnFlash(randomBtn);
    console.log(gameSeq);

}

function buttonPress(){
let btn=this;
userFlash(btn);
userColor=btn.getAttribute("id");
userSeq.push(userColor);
console.log(userColor);
checking(userSeq.length-1);


}
function checking(idx){
 if(userSeq[idx]!=gameSeq[idx]){
    highestScore=Math.max(highestScore,level);
    h2.innerHTML=`Game Over! Your Score was <b> ${level} </b>, Your Hight Score Till now is <b>${highestScore}<b>,<br> Press any key to start`;
    document.querySelector('body').style.backgroundColor='red'; 
    setTimeout(function(){
        document.querySelector('body').style.backgroundColor='white'; 
    },150);       
    reset();
 }
 else {
    if(userSeq.length==gameSeq.length){
        setTimeout(  levelUp(),1000);
    }
    
 }
}

function btnFlash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash")
 },250);
}

function userFlash(btn){
 btn.classList.add("userFlash");
 setTimeout(function(){
    btn.classList.remove("userFlash")
 },250);
}

let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
    btn.addEventListener("click",buttonPress);
}

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}

let gameSeq =[];
let userSeq = [];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;
let btns = ["lightred", "lightgreen","lightblue", "lightyellow"];
let btnss = document.querySelector(".startbtn")
btnss.addEventListener("click",function(){
   if (started == false){
    console.log("game is satrted");
    started = true;
    levelup();
   }
});
function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash")
   },250);
};
function levelup(){
   userSeq = [];
   level ++;
   h2.innerText = `level ${level}`;
   let ranIdx = Math.floor(Math.random()*4);
   let ranColor = btns[ranIdx];
   let ranBtn = document.querySelector(`.${ranColor}`);
   gameFlash(ranBtn);
   gameSeq.push(ranColor);
   console.log(`Game sequence is = ${gameSeq}`);
   console.log(`Gameseq length is ${gameSeq.length}`);
   //console.log(`Current level is ${level}`);
};
function checkAns(idx){
   if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelup,1200);
        }
      }
   else{
      h2.innerHTML = `Game Over!!<h5><b>Your score is ${level}</b></h5><br>`;
      reset();
   }
}
function userFlash(btn){
   btn.classList.add("userflash");
   setTimeout(function(){
    btn.classList.remove("userflash")
   },250);
};
function btnPress(){
   // console.log("buttn was pressed");
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(`Userseq is ${userSeq}`);
    console.log(`Userseq length is ${userSeq.length}`);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".mainDiv");
for(alom of allBtns){
    alom.addEventListener("click",btnPress);
};
function reset(){
   started = false;
   userSeq = [];
   gameSeq = []; 
   level = 0;
}

let boxs = document.querySelectorAll(".box");
let playagainbtn = document.querySelector("#playagain");
let winnertext = document.querySelector("#winner")
let turnofx= true;
playagainbtn.addEventListener("click" , () =>{
  winnertext.innerText = " LET THE GAME BEGIN!!";
  boxs.forEach((box)=>{
    box.innerText = "";
    box.disabled = false;
  })
})

const winningPatterns = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6]
];
const disableingbt=()=>{
  for(btn of boxs){
    btn.disabled = true ;
  }
}
const checkwinner=() => {
    for(each of winningPatterns){
        let pos1 = boxs[each[0]].innerText;
        let pos2 = boxs[each[1]].innerText;
        let pos3 = boxs[each[2]].innerText;
        if(pos1 !="" && pos2 != "" && pos3 !="" ){
      if(pos1 === pos2 && pos2=== pos3){
       if(pos1 ==="X"){
        winnertext.innerText = "X winnes!!";
       disableingbt();
       }
       else{
         winnertext.innerText ="O winner!!";
       disableingbt();
       }
      }
    }
    }
   
};
boxs.forEach((box)=>{
    box.addEventListener("click" , ()=>{
     if(turnofx===true){
        box.innerText = "X";
        turnofx = false;
     }
     else{
        box.innerText = "O";
        turnofx = true ;
     }
      box.disabled = true;
       checkwinner();
    })
})


let boxs = document.querySelectorAll(".box");
let playagainbtn = document.querySelector("#playagain");
let turnofx= true;

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

checkwinner(() =>{
    for(each of winningPatterns){
        
    }
})
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
    })
    checkwinner()
})
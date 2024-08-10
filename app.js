let boxes=document.querySelectorAll(".box")
let btn=document.querySelector(".reset")
let turn = "O"; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
function check()
{
    for(let i=0;i<winPatterns.length;i++)
    {
        const[a,b,c]=winPatterns[i];
        if(boxes[a].innerText===turn && boxes[b].innerText===turn && boxes[c].innerText===turn)
        {
            return true;
        }
    }
    return false;
    
}
function handle(e)
{
    if(e.target.innerText==="")
    {
        e.target.innerText=turn;
        count++;
    }
    if (check()) {
        setTimeout(() => {  
          alert(`Player ${turn} wins!`);
          resetGame();
        }, 100);  
      } else if (count === 9) {
        setTimeout(() => { 
          alert("It's a draw!");
          resetGame();
        }, 100); 
    }
    else{
        turn=turn==="O"?"X":"O";
    }
}
function resetGame()
{
    for(let i=0;i<9;i++)
    {
        boxes[i].innerText="";
        turn="O";
        count=0;
    }
}
for(let box of boxes)
{
    box.addEventListener("click",handle);
}
btn.addEventListener("click",resetGame);
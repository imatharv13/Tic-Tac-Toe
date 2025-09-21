 let boxes = document.querySelectorAll(".box");
 let resetBtn = document.querySelector(".reset");
 let newGamebtn = document.querySelector(".new-btn");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg");

 let turn0 = true; // Player0 and PlayerX 

 const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
 ];
 const resetGame = () => {
    turn0 = true ;
    EnabledBoxes();
    msgContainer.classList.add("hdie");
    
}

 boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        // console.log("Box was clicked"); 
        if (turn0){    //player o play and then turn shift to x 
            box.innerText = "O";
            turn0 = false;
        }else{         //player x play and then turn shift to o
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled= true;   //  once clicked the box entry cant chnage 

       checkWinner();
    });
 });

 const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled= true;
    }
 }

 const EnabledBoxes = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
    }
 }
 const showWinner = (winner) =>{
    msg.innerText=`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disabledBoxes();

 }

const checkWinner = () =>{
    for( let pattern of winPatterns){
        // console.log(win[0],win[1],win[2]);
        // console.log(boxes[win[0]].innerText,
        //             boxes[win[1]].innerText,
        //             boxes[win[2]].innerText

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                showWinner(pos1Val);
            }

        }
    

    }
    
};


newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);
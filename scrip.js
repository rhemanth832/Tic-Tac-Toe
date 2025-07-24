console.log("script loaded");
let boxes =document.querySelectorAll(".block")
let rst =document.querySelector("#reset")

let newGamebtn=document.querySelector("#newbtn")
let msg=document.querySelector("#message")
let msgCont=document.querySelector(".msg");

let turn0 = true;

const win=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]

boxes.forEach((block)=>{
    
    block.addEventListener("click",()=>{
        console.log("clicked");
        if (turn0) // 1st player
        {
        block.innerText="O";
        turn0=false;
        }
        else{    // 2nd player
            block.innerText="X";
            turn0=true;
        }
        block.disabled=true;

        check();
    });

});

const show=(winner)=>{
    msgCont.classList.remove("hide");
    msg.innerText=`Congratulations winner is ${winner} player`;
    

}

const check=()=>{
    console.log("entered")
    for (let pattern of win)
    {
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;
       console.log("entered")
       if (pos1 !="" && pos2 !="" && pos3 !="" )
       {
        if (pos1===pos2 && pos2===pos3)
        {
            console.log("winner ");
            show (pos1);
            
            return;
        }
       }
    }

}

rst.addEventListener("click",e=>{
    location.reload();
})

newGamebtn.addEventListener("click",()=>{
    location.reload();
})
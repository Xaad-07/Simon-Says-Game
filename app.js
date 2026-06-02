let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
     {
        console.log("Game is started");
        started=true;
        levelup();
    }
});

function userFlash(btn)
{
  btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
    
}

function levelup()
{
    userseq=[];
    level++;
 h2.innerText = `Level ${level}`;

 let rndidx=Math.floor(Math.random()*3);
 let rndcolor=btns[rndidx];
 let rndbtn=document.querySelector(` .${rndcolor} `);
gameseq.push(rndcolor);
console.log(gameseq);
 userFlash(rndbtn);
}


function checkans(idx)
{
    if(userseq[idx]===gameseq[idx])
   {
        if(userseq.length===gameseq.length)
        {
            setTimeout(levelup,1000);
        }
        console.log("Same value");
    }
    else
    {
        h2.innerHTML=`Game Over! Your score was <b>${level}</b>. <br>  Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
}

function btnPress()
{
    let btn = this;
   userFlash(btn);

    usercolor= btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click", btnPress);
}

function reset()
{
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
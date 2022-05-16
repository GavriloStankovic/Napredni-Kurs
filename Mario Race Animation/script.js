const mario = document.querySelector('.marioHendler');
const box = document.querySelector('#box');
let animationProgress = false;
const collation = false;
let jumpStartTime;

box.style.left = '700px';
box.style.height = '60px';
mario.style.bottom = '5px';

let boxHeigth = parseInt(box.style.height,10);
mario.style.width = '115px';

let y = 0;

const jumpAnimation = () => {
    let now = new Date().getTime();
    let timePassed = now - jumpStartTime;

    if(timePassed < 1000){
        y++;
    }else{
        y = y > 0 ? y-1 : 5;
    }
    mario.style.bottom = `${y}px`; 
    if(timePassed < 2000){
        requestAnimationFrame(jumpAnimation);
    }else{
        animationProgress = false;
    }
};

window.addEventListener('keypress', (e) => {
    if (e.keyCode == 32 && animationProgress == false) {
        jumpStartTime = new Date().getTime();
        animationProgress = true;
        jumpAnimation();
    }
});


let start;
let endTimeInMs = 10000;
let boxPositionInPx = box.style.left;
let boxPosition = parseInt(boxPositionInPx, 10);
let marioWidth = parseInt(mario.style.width, 10) * 1.65;
let hitRegisteredY = false;
let userJumpedBeforeObstacle = false;
let userJumpedOnObstical = false;
const gameLoop = () => { 

    let hitRegisteredX = parseInt(mario.style.left, 10) - boxPosition - marioWidth;
    let timePassed = new Date().getTime() - start;
    let marioBottom = parseInt(mario.style.bottom,10);
    if(hitRegisteredX > -10 && hitRegisteredX < 250 && animationProgress == false){
        userJumpedOnObstical = true;
        setTimeout (() => document.querySelector('.gameOver').style.display = 'flex', 1500)
        setTimeout (() => document.querySelector('.gameOver').style.display = 'none', 5000)
    }

    if((hitRegisteredX > -100 && hitRegisteredX < -50) == true && animationProgress == true){
        userJumpedBeforeObstacle = true;
        hitRegisteredY = false;
    }
    else if(animationProgress == false && userJumpedBeforeObstacle == false){
        hitRegisteredY = true;
    }
    let stopLoop = hitRegisteredX > 0 && hitRegisteredY == true || userJumpedOnObstical;
    if (timePassed <= endTimeInMs) {
        if (stopLoop == false) {
            requestAnimationFrame(gameLoop);
        }
    }
    mario.style.left = `${(timePassed / 5)}px`;

    
    
}

start = new Date().getTime();
gameLoop()




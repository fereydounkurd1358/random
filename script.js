const $ = document;
//---------------------------
const input = $.querySelector('.input');
const btn = $.querySelector('.btn');
let headingOrder = $.querySelector('.headingOrder');
let p1 = $.querySelector('.headP1');
let p2 = $.querySelector('.teamP1');
let p3 = $.querySelector('.headP2');
let p4 = $.querySelector('.teamP2');
let resetDataBtn = $.querySelector('.resetData');
let games = $.querySelector('.games');

let playersList = [];
let players = 0;
let randome = false;

window.addEventListener('DOMContentLoaded', ()=>{
    window.scrollTo(0, 100);
});

function randomeProcess() {
    if (!randome) {
        if (input.value !== '') {
            players++;
            playersList.push(input.value);
            input.value = '';
            input.focus();
            console.log(players);
            
            if (players === 1) {
                headingOrder.innerHTML = 'بازیکن دوم'
            }else if (players === 2) {
                headingOrder.innerHTML = 'بازیکن سوم'
            }else if (players === 3) {
                headingOrder.innerHTML = 'بازیکن چهارم'
            }else if (players === 4) {
                headingOrder.innerHTML = 'حالا شروع کن ...'
                input.setAttribute('disabled',null);
                btn.innerHTML = 'شروع';
                randome = true;
            }
        }else {
            input.classList.add('empty');
            input.addEventListener("animationend",()=>{
                input.classList.remove('empty');
            })
        }    
    }else {
        btn.setAttribute('disabled', null);
        headingOrder.innerHTML = 'منتظر بمانید ...';
        window.scrollTo(0, 0);
        setTimeout(() => {
            let randomePlayer = Math.floor(Math.random() * playersList.length);
            p1.innerHTML = playersList[randomePlayer];
            p1.classList.add('pp1')
            playersList = playersList.filter((x)=> x !== playersList[randomePlayer]);
        }, 2000);
        setTimeout(() => {
            let randomePlayer = Math.floor(Math.random() * playersList.length);
            p3.innerHTML = playersList[randomePlayer];
            p3.classList.add('pp3')
            playersList = playersList.filter((x)=> x !== playersList[randomePlayer]);
        }, 9000);
        setTimeout(() => {
            let randomePlayer = Math.floor(Math.random() * playersList.length);
            p2.innerHTML = playersList[randomePlayer];
            p2.classList.add('pp2')
            playersList = playersList.filter((x)=> x !== playersList[randomePlayer]);
        }, 18000);
        setTimeout(() => {
            p4.innerHTML = playersList[0];
            p4.classList.add('pp4');            
            resetDataBtn.style.display = 'block';
            let gamesNum = Math.floor((Math.random() * 5) + 1);
            games.innerHTML = gamesNum;
            games.style.display = 'flex';
            headingOrder.innerHTML = 'جووون بزن بریم :)';
        }, 18500);  
    }
}
btn.addEventListener('click', randomeProcess)
input.addEventListener('keypress', (e)=>{
    if (e.keyCode === 13) {
        randomeProcess();
    }
})

resetDataBtn.addEventListener('click', ()=> {
    resetData();
    resetDataBtn.style.display = 'none';
})
function resetData() {
    p1.classList.remove('pp1');
    p2.classList.remove('pp2');
    p3.classList.remove('pp3');
    p4.classList.remove('pp4');
    p1.innerHTML = '';
    p2.innerHTML = '';
    p3.innerHTML = '';
    p4.innerHTML = '';
    playersList = [];
    input.removeAttribute('disabled');
    btn.removeAttribute('disabled');
    btn.innerHTML = 'تایید';
    randome = false;
    players = 0;
    games.innerHTML = '';
    games.style.display = 'none';
    headingOrder.innerHTML = 'بازیکن اول';
    window.scrollTo(0, 100);
}
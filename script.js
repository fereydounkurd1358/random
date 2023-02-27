const $ = document;
//---------------------------
const input = $.querySelector('.input');
const btn = $.querySelector('.btn');
let p1 = $.querySelector('.headP1');
let p2 = $.querySelector('.teamP1');
let p3 = $.querySelector('.headP2');
let p4 = $.querySelector('.teamP2');
let resetDataBtn = $.querySelector('.resetData');
let games = $.querySelector('.games');


let playersList = [];
let players = 0;
let randome = false;



btn.addEventListener('click', ()=> {
    
    if (!randome) {

        players++;
        playersList.push(input.value);
        input.value = '';
        input.focus()
        
        if (players === 4) {
            input.setAttribute('disabled',null);
            btn.innerHTML = 'شروع';
            randome = true;
        }
        console.log(players, playersList);
    
    }else {
        // let randomePlayer = Math.floor(Math.random() * playersList.length);
        // console.log(playersList[randomePlayer]);//***//
        // playersList = playersList.filter((x)=> x !== playersList[randomePlayer]);
  
  
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
            
            // let randomePlayer = Math.floor(Math.random() * playersList.length);
            p4.innerHTML = playersList[0];
            p4.classList.add('pp4');            
            resetDataBtn.style.display = 'block';

            let gamesNum = Math.floor((Math.random() * 5) + 1);
            games.innerHTML = gamesNum;
            games.style.display = 'block';
  
        }, 18500);
  
  
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
    btn.innerHTML = 'تایید';
    randome = false;
    players = 0;
    games.innerHTML = '';
    games.style.display = 'none';
}
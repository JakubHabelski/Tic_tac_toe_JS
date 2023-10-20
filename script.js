let buttons = document.getElementById("buttons").querySelectorAll('button');
let winner = document.getElementById("winner")
let turn = document.getElementById("turn")
let reset = document.getElementById("reset")
let i=0;
let winner_char="";
turn.innerText="O turn";
reset.disabled=true;
let line = document.getElementById("line")



function print_winner(btn){
    winner.innerHTML=btn+" wins"
    console.log(btn+" wins")
}

function change_opacity(btn1, btn2, btn3) {  //animacja podświetlenie zwycięskiego układu
    const buttons_arr = [btn1, btn2, btn3];
    let i = 0;
    function toggleOpacity() {
        if (i % 2 === 0) {
            buttons_arr.forEach(button => {
                button.style.opacity = "0";
            });
        } else {
            buttons_arr.forEach(button => {
                button.style.opacity = "1";
            });
        }
        i++;
        if (i < 6) {
            setTimeout(toggleOpacity, 300); 
        }
    }
    toggleOpacity(); 
}

function draw_line(line, top, left, rotation) {
    line.style.top = top;
    line.style.left = left;
    line.style.transform = `rotate(${rotation})`;
    line.style.visibility = "visible";
}

    
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(i%2==0){
            turn.innerText="X turn";
            button.innerText="O";
            button.value="O";
            i++;  
            console.log(i)           
        }else{
            turn.innerText="O turn";
            button.innerText="X"; 
            button.value="X";
            i++; 
            console.log(i) 
        }       
        button.disabled=true;
            //rzędy    
                if ((btn11.value!="") && btn11.value === btn12.value && btn12.value === btn13.value) {winner_char=(btn11.value); change_opacity(btn11, btn12, btn13); draw_line(line, "-150px", "300px", '90deg');}
                if ((btn21.value!="") && btn21.value === btn22.value && btn22.value === btn23.value) {winner_char=(btn21.value); change_opacity(btn21, btn22, btn23); draw_line(line, "50px", "300px", '90deg');}
                if ((btn31.value!="") && btn31.value === btn32.value && btn32.value === btn33.value) {winner_char=(btn31.value); change_opacity(btn31, btn32, btn33); draw_line(line, "250px", "300px", '90deg');}
            //kolumny
                if ((btn11.value!="") && btn11.value === btn21.value && btn21.value === btn31.value) {winner_char=(btn11.value); change_opacity(btn11, btn21, btn31); draw_line(line, "50px", "97px", '0deg');}
                if ((btn12.value!="") && btn12.value === btn22.value && btn22.value === btn32.value) {winner_char=(btn12.value); change_opacity(btn12, btn22, btn32); draw_line(line, "50px", "297px", '0deg');}
                if ((btn13.value!="") && btn13.value === btn23.value && btn23.value === btn33.value) {winner_char=(btn13.value); change_opacity(btn13, btn23, btn33); draw_line(line, "50px", "497px", '0deg');}    
            //przekątna
                if ((btn11.value!="") && btn11.value === btn22.value && btn22.value === btn33.value) {winner_char=(btn11.value); change_opacity(btn11, btn22, btn33); draw_line(line, "0px", "300px", '-45deg'); line.style.height="600px"}
                if ((btn13.value!="") && btn13.value === btn22.value && btn22.value === btn31.value) {winner_char=(btn13.value); change_opacity(btn13, btn22, btn31); draw_line(line, "0px", "300px", '45deg'); line.style.height="600px"}
                
                if(winner_char!=""){
                    print_winner(winner_char)
                    buttons.forEach(button => {
                        button.disabled=true;
                    });
                    reset.disabled=false;
                    reset.style.visibility = "visible";
                   }
                if(winner_char=="" && i>8){
                    winner.innerHTML="Draw"
                    reset.disabled=false;
                    reset.style.visibility = "visible";
                } 
           
    });
});

    reset.addEventListener("click", ()=>{
        buttons.forEach(button =>{
            button.value="";
            button.innerText=""; 
            winner.innerHTML="";
            button.disabled=false;
            
        })
        winner_char = ""
        turn.innerText="O turn";
        i=0;
        reset.disabled = true;
        reset.style.visibility = "hidden";
        line.style.visibility = "hidden";
    })


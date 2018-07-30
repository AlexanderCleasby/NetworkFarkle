
//import {socket} from './main.js'
document.getElementById('rulesBtn').addEventListener('click',()=>{
    showrulesmodal(true)
})
export function nameModal(show) {
    if (show) {
        document.getElementById("Modal").style.display = "block";
        document.getElementById("Master").style.filter = "blur(5px)";
    } else {
        document.getElementById("Modal").style.display = "none";
        document.getElementById("Master").style.filter = "none";
    }
}

export function playerdisconnect(player){
    document.getElementsByClassName('modalBox')[0].innerHTML=
    "Sorry.... it looks "+
    player.name+
    " lost connection and currently that"+
    " means this game is over.  You will be re-routed to the lobby in a moment."
    document.getElementById("Modal").style.display = "block";
    document.getElementById("Master").style.filter = "blur(5px)";
    window.setTimeout(()=>{window.location.href = '../'},1000*5)
}

export function showrulesmodal(show){
    if (show){
        let ruleframe = document.createElement('iframe')
        let closebtn = document.createElement('button')
        closebtn.innerHTML='x'
        //Set up rules modal
        ruleframe.src='/rules'
        document.getElementsByClassName('modalBox')[0].innerHTML=''
        ruleframe.setAttribute('class','ruleframe')
        //set up close button
        closebtn.addEventListener('click',()=>{
            showrulesmodal(false);
        })
        closebtn.setAttribute('class','modalClose')
        //append both to modal
        document.getElementsByClassName('modalBox')[0].appendChild(closebtn)
        document.getElementsByClassName('modalBox')[0].appendChild(ruleframe)
        document.getElementById("Modal").style.display = "block";
        document.getElementById("Master").style.filter = "blur(5px)";
    }
    else{
        document.getElementsByClassName('modalBox')[0].innerHTML=''
        document.getElementById("Modal").style.display = "none";
        document.getElementById("Master").style.filter = "none";

    }
}
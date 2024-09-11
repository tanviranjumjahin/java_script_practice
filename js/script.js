// function start 
function calculation (){
let x = 500
let y = 899
let z = x+y
let result = z
console.log(result);

}

calculation()
// function end


// map start 

let teams =["shafiq","jaman","sayed","sumon","biplop"]

teams.map((items)=>{
    console.log(items);
    
}
)
// map End
// speech start 

let memberlist=["shafiq","jaman","sayed","sumon","biplop"]

function greetings(members) {
    let utterance = new SpeechSynthesisUtterance(`welcome ${members}`);
    speechSynthesis.speak(utterance);
    
}

for (let i = 0; i < memberlist.length; i++) {
    greetings = (memberlist[i]);
    
}

// speech end


    


let pragraph = document.querySelector(".number");
let number = 0;

function decrement(){
    number--;
    pragraph.textContent = number;
    if(number < 0){
        pragraph.style.color = "Red";
    } else{
        pragraph.style.color = "Green"
    }
}
function reset(){
    number = 0;
    pragraph.textContent = number;
    pragraph.style.color = "Black";
}
function increment(){
    ++number;
    pragraph.textContent = number;
    pragraph.style.color = "Green";
    if(number > 10){
        pragraph.style.color = "Orange";
    }
}

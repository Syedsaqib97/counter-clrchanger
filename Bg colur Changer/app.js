let colors = ["Green","Red","Yellow","Blue","Orange","Purple"];

let colorName = document.querySelector("span");
function colorHandler(){
    let rColor = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[rColor];
    colorName.textContent = colors[rColor];
} 

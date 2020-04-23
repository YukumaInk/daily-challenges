let heightVar = document.getElementById("Height");
let widthVar = document.getElementById("Width");
let solid = document.getElementById("solid");
let out = document.getElementById("viewer");
let topLeft = document.getElementById("top-left");
let topRight = document.getElementById("top-right");
let bottomLeft = document.getElementById("bottom-left");
let bottomRight = document.getElementById("bottom-right");

function copyText(){
    out.select();
    document.execCommand("copy");
}
function update(){
    solid.style.width = `${widthVar.value}px`;
    solid.style.height = `${heightVar.value}px`;
    solid.style.borderRadius = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
    out.value = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`;
}
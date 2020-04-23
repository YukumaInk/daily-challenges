let baseColor = document.getElementById("color");
let colorChange = document.getElementById("colorChange");
let timeInterval = document.getElementById("time");
let solid = document.getElementById("square");
let btnStart = document.getElementById("start");
let intervalRefresh;
let started = false;
function hexToDecimal(hex){
    let first = hex[0];
    let second = hex[1];
    let number = 0;
    if(isNaN(parseInt(first))){
        if(first == 'a')number+=10*16;
        else if(first == 'b')number+=11*16;
        else if(first == 'c')number+=12*16;
        else if(first == 'd')number+=13*16;
        else if(first == 'e')number+=14*16;
        else if(first == 'f')number+=15*16;
    }
    else{
        number += 15 * parseInt(first) + parseInt(first);
    }
    if(isNaN(parseInt(second))){
        if(first == 'a')number+=10;
        else if(first == 'b')number+=11;
        else if(first == 'c')number+=12;
        else if(first == 'd')number+=13;
        else if(first == 'e')number+=14;
        else if(first == 'f')number+=15;
    }
    else{
        number += parseInt(second);
    }
    return number;
}
function hexToRGB(hex){
    let R = hex.slice(1,3);
    let G = hex.slice(3,5);
    let B = hex.slice(5,7);
    R = hexToDecimal(R);
    G = hexToDecimal(G);
    B = hexToDecimal(B);
    return R + ',' + G + ',' + B;
}

function rgbToHex(r, g, b){
    let hex = '#';
    if(parseInt(R)/16>=1){
        if()
    }
}

function changeColor(){
    let rgbChange = colorChange.value.split(',');
    let rgbBase = hexToRGB(baseColor.value);
    rgbBase = rgbBase.split(',');
    let R,G,B;
    R = parseInt(rgbBase[0]) + parseInt(rgbChange[0]);
    G = parseInt(rgbBase[1]) + parseInt(rgbChange[1]);
    B = parseInt(rgbBase[2]) + parseInt(rgbChange[2]);
    if(R>255) R-=255;
    if(G>255) G-=255;
    if(B>255) B-=255;

    let hexOut = rgbToHex(R,G,B);

    solid.style.background = `rgb(${R},${G},${B})`;
    baseColor.value =;
}

function startStop(){
    if(!started){
        started = true;
        solid.style.background = `${baseColor.value}`;
        intervalRefresh = setInterval(changeColor, 1000);
        btnStart.innerHTML = 'Stop';
    }
    else{
        clearInterval(intervalRefresh);
        started = false;
        btnStart.innerHTML = 'Start';
    }
}
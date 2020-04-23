let viewer = document.getElementById("viewer");
let numberCounter = 0;
let pointExists = false;
let onOperation = false;
let resulted = false;
let numberOld = null;
let numberNew = null;
let oper = ' ';

function addNumber(number){
    if(resulted){
        allClearViewer();
    }
    if(numberCounter<8){
        viewer.innerHTML+=`${number}`;
        numberCounter++;
    }
}
function addPoint(){
    if(!pointExists){
        viewer.innerHTML+='.';
        pointExists=true;
    }
}
function clearViewer(){
    viewer.innerHTML = '';
    numberCounter=0;
    pointExists=false;
}
function allClearViewer(){
    clearViewer();
    numberNew = null;
    numberOld = null;
    oper = ' ';
    onOperation = false;
    resulted = false;
}
function operation(op){
    if(!onOperation){
        onOperation = true;
        oper = op;
        numberOld = parseFloat(viewer.innerHTML);
        clearViewer();
    }
}
function verifOp(){
    if(oper!=' '){
        numberNew = parseFloat(viewer.innerHTML);
        switch(oper){
            case 'divide': return numberOld / numberNew;
            case 'times': return numberOld * numberNew;
            case 'minus': return numberOld - numberNew;
            case 'plus': return numberOld + numberNew;
            case 'percent': return numberOld/100 * numberNew;
        }
    }
    else{
        return viewer.innerHTML;
    }
}
function genResult(){
    let result = verifOp();
    clearViewer();
    onOperation = false;
    resulted = true;
    viewer.innerHTML = result.toFixed(2);
}
function invertNumber(){
    viewer.innerHTML = -1*parseFloat(viewer.innerHTML);
}
function getAction(action){
    switch(action){
        case '1': return addNumber(1);
        case '2': return addNumber(2);
        case '3': return addNumber(3);
        case '4': return addNumber(4);
        case '5': return addNumber(5);
        case '6': return addNumber(6);
        case '7': return addNumber(7);
        case '8': return addNumber(8);
        case '9': return addNumber(9);
        case '0': return addNumber(0);
        case 'decimal': return addPoint();
        case 'divide': return operation('divide');
        case 'times': return operation('times');
        case 'minus': return operation('minus');
        case 'plus': return operation('plus');
        case 'ac': return allClearViewer();
        case 'c': return clearViewer();
        case 'equal': return genResult();
        case '%': return operation('percent');
        case 'invert': return invertNumber();
    }
}
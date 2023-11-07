var screen = document.getElementById('screen');

function btnClick(value){
    screen.value += value;
}

function Clearscreen(){
    screen.value='';
}
function findresult(){
    var result=eval(screen.value)
    screen.value=result;

    

}

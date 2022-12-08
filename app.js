function clr(){
    document.getElementById('NBR').value='';
}
function display(n){
    document.getElementById('NBR').value += n;
}
function answer(){
    let x = document.getElementById('NBR').value;
    let y = eval(x) 
    document.getElementById('NBR').value = y;                
}
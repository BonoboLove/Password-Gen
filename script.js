var all = "";
var placeholders = "";
var ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abc = "abcdefghijklmnopqrstuvwxyz";
var numbs= "012345678901234567890";
var symbs= "~`!@#$%^&*()-_+={[]}|\:;<,>.?/";
var lowerval = document.getElementById('lowercheck');
var upperval = document.getElementById('uppercheck');
var numval = document.getElementById('numcheck');
var symval = document.getElementById('symcheck');

function myFunction() {
    lowerval.checked = false;
    upperval.checked = false;
    numval.checked = false;
    symval.checked = false;
}

function lowercase(){
    if(lowerval.checked){
        all += abc;
    }else{
        all = all.replace(abc,'');
        all += placeholders;
    }
    if(all == "NaN"){
        all = "";
    }
}

function uppercase(){
    if(upperval.checked){
        all += ABC;
    }else{
        all = all.replace(ABC,'');
        all += placeholders;
    }
    if(all == "NaN"){
        all = "";
    }
}

function numbers(){
    if(numval.checked){
        all += numbs;
    }else{
        all += placeholders;
        all = all.replace(numbs,'');
    }
    if(all == "NaN"){
        all = "";
    }
}

function symbols(){
    if(symval.checked){
        all += symbs;
    }else{
        all += placeholders;
        all = all.replace(symbs,'');
    }
    if(all == "NaN"){
        all = "";
    }
}

function finish(){
    var shuffled = all.split('').sort(function(){
        return 0.5-Math.random()}).join('');
        var lengthval = document.getElementById('changinglength').value;
    shuffled = shuffled.substring(0, lengthval);
    console.log(shuffled);
    document.getElementById('result').innerHTML = "Password: " + shuffled;
}

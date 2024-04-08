function randomize(max){
    var randomNumber1 = Math.round(Math.random()*max)+1;

    return randomNumber1;
}

// console.log(randomize(6));

var num1 = randomize(5);
var num2 = randomize(5);

document.querySelector('img.img1').setAttribute('src', './images/dice'+num1+'.png');
document.querySelector('img.img2').setAttribute('src', './images/dice'+num2+'.png');

if (num1>num2){
    document.querySelector('h1').innerHTML='🚩 Player 1 Wins!'
}
else if(num2 > num1){
    document.querySelector('h1').innerHTML='Player 2 Wins! 🚩'
}
else if (num1 === num2){
    document.querySelector('h1').innerHTML='Draw!'
}else{
    document.querySelector('h1').innerHTML='Refresh Me!'
}

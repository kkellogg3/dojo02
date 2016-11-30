function runRomanConvert(num){
    
 // var capsLock = capsLock.toUpperCase(romanKey).split('');
  
var user = parseInt(document.querySelector(".rom-input").value);
console.log(user);
  
    
var result = '';

var number = [1, 5, 10, 50, 100, 500, 1000];

var romanKey = ["I", "V", "X", "L", "C", "D", "M"];

//var n = num.toString().split('').reverse();

//document.querySelector(".rom-output").innerHTML=convert(result);
 
 function convert(n){
    
    for (var i = 0; i <= number.length; i++){
        while(num%romanKey[i] < num) {
            result += romanKey;
            num -= number;
            var n = num.toString(number).split('').reverse();
        }
    }
 }

 document.querySelector(".rom-output").innerHTML=convert(user);

   
    //return result;
    //document.querySelector(".rom-output").innerHTML;
}


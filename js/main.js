function runRomanConvert() {
    
    var n = parseInt(document.querySelector('.rom-input').value);
    console.log(n);
    document.querySelector('.rom-output').innerHTML = convert(n);
    
    var romanKey = [
        
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ["", "M", "MC", "MCC", "MCD", "MD", "MDC", "MDCC", "MDCCC", "MCM"]
        ];
        
    function convert(num) {
        var decimal = "";
        var convertNumber = num.toString().split('').reverse();
        
        for (var i = 0; i <convertNumber.length; i++){
            decimal = romanKey[i][parseInt(convertNumber[i])] + decimal;
        }
        
        return decimal;
}



// function runRomanConvert(num){
    
//  // var capsLock = capsLock.toUpperCase(romanKey).split('');
  
// var user = parseInt(document.querySelector(".rom-input").value);
// console.log(user);
  
    
// var result = '';

// var number = [1, 5, 10, 50, 100, 500, 1000];

// var romanKey = ["I", "V", "X", "L", "C", "D", "M"];

// //var n = num.toString().split('').reverse();

// //document.querySelector(".rom-output").innerHTML=convert(result);
 
//  function convert(n){
    
//     for (var i = 0; i <= number.length; i++){
//         while(num%romanKey[i] < num) {
//             result += romanKey;
//             num -= number;
//             var n = num.toString(number).split('').reverse();
//         }
//     }
//  }

//  document.querySelector(".rom-output").innerHTML=convert(user);

   
//     //return result;
//     //document.querySelector(".rom-output").innerHTML;
// }


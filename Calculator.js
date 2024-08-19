var operator = prompt('Enter operator( +, -, * or / ): ');
var num1 = parseFloat(prompt('Enter first number: ')); //------> parseFloat = mengubah string menjadi float
var num2 = parseFloat(prompt('Enter second number: '));
var result;

if(!isNaN(num1) && !isNaN(num2)){
//----> isNan = mengecek apakah inputan user adalah angka atau bukan
//----> jika inputan user adalah angka maka false
} else {
  alert('Your input is not a number')
}

if (operator == '+') {
  result = num1 + num2
} else if (operator == '-') {
  result = num1 - num2
} else if (operator == '*') {
  result = num1 * num2
} else if (operator == '/') {
  result = num1 / num2
} else {
    alert('No Operator choosen')
}
document.write(`${num1} ${operator} ${num2} = ${result}`);
//-----> `()` = string interpolation


function reverseInteger(num) {
    var reversed = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
    return reversed;
}
console.log(reverseInteger(500));

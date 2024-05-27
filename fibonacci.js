function fibonacciSequence(n) {
    var sequence = [0, 1];
    for (var i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
console.log(fibonacciSequence(10));

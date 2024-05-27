function countVowels(sentence) {
    var vowels = sentence.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
console.log(countVowels("Hello World"));

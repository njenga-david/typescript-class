function isPowerOfTwo(num: number): boolean {
    return (num !== 0) && ((num & (num - 1)) === 0);
}
console.log(isPowerOfTwo(8)); 
console.log(isPowerOfTwo(6)); 

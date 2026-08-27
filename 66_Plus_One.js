// JUNAYED HASAN
// 1st approach
// const plusOne = (digits) => {
//     const arr = [...digits];
//     const result = Number(arr.join('')) + 1;
//     return String(result).split('').map(Number);
// };
// console.log(plusOne([1, 2, 3]));


const plusOne = (digits) => {
    const arr = [...digits];
    const result = BigInt(arr.join('')) + 1n;
    return String(result).split('').map(Number);
};
console.log(plusOne([1, 2, 3]));
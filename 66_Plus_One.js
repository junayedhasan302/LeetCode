// JUNAYED HASAN
const plusOne = (digits) => {
    const arr = [...digits];
    const result = Number(arr.join('')) + 1;
    return String(result).split('').map(Number);
};
console.log(plusOne([1, 2, 3]));
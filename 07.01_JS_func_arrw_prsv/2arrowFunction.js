console.log("////////////////////! ARROW FUNCTION /////////////////////");
// ARROW FUNCTION, cara LEBIH SINGKAT
// umumnya FUNCTION biasa seperti ini
const added = function (number) {
    return number * number;
};
// menjadi ini
const add = (number) => number * number // kata function hilang langsung parameter, return menjadi "=>"

// LIMITASI ARROW FUNCTION
console.log("////////////////////! LIMITASI ARROW FUNCTION /////////////////////");
// FUNCTION biasa consoleLog bisa diatas
console.log(sum1(10, 20)); // ini bisa jalan TAPIIIIIIIIIIIIII
function sum1(a, b) {
    return a + b
}
// ARROW FUNCTION tidak bisa
// console.log(sum2(10, 20)); // ini TIDAK BISA jalan ERROR
const sum2 = (a, b) => a + b
console.log("////////////////////! no. 1 SALAH /////////////////////");
/** Struktur Data LiFo Last in First Out adalah STACK
*/

console.log("////////////////////! no. 2 /////////////////////");
console.log(typeof null);   // hasil objek
console.log(typeof 151);    // hasil number

console.log("////////////////////! no. 3 SALAH /////////////////////");
let angka1 = '12';
angka1 *= 2;
angka1++
angka1--
angka1 += '1';
console.log(angka1);

console.log("////////////////////! no. 4 /////////////////////");
let temp = [3,2,1,5];
temp.push(3);
temp.sort();
temp.pop();
console.log(temp); // 1,2,3,3

console.log("////////////////////! no. 5 /////////////////////");
let arr = [
    "book",
    true,
    [1, "banana"],
    null,
    ["false", [2, NaN], false, ["clock", 0]],
    NaN,
    false,
    [true],
]
console.log(Boolean(arr[4][3][0]));

console.log("////////////////////! no. 6 SALAH /////////////////////");
// The Correct way to write The Name and Declaration variable is
// const nama_sekolah = "Purwadhika"

console.log("////////////////////! no. 7 /////////////////////");
function capitalize() {
    const name1 = "KLEE"
}
// console.log(name1); // hasil ERROR name1 is not defined

console.log("////////////////////! no. 8 SALAH /////////////////////");
getDouble(4);
function getDouble(numb){
    console.log(2*2);
}
console.log("////////////////////! 4 /////////////////////");


console.log("////////////////////! no. 9 SALAH /////////////////////");
// let temp = "javascript is awesome".split(' ');
// for(let i = 0; i < temp.length; i += 1) {
//     temp.push(temp[i]);
// }
console.log("////////////////////! INFINITE LOOP /////////////////////");


console.log("////////////////////! no. 10 SALAH /////////////////////");
// function printMessage(message, callback) {
//     callback(message);
// }
// printMessage('Hello', 'World');
console.log("////////////////////! CALLBACK IS NOT FUNCTION /////////////////////");


console.log("////////////////////! no. 11 /////////////////////");
let angka = '12z';
angka = Number(angka);
angka = String(angka);
console.log(angka);
console.log("////////////////////! NaN, and STRING /////////////////////");


console.log("////////////////////! no. 12 SALAH /////////////////////");
// getDouble2(4);
// const getDouble2 = function (numb) {
//     console.log(2*2);}
console.log("////////////////////! ERROR CANT ACCESS /////////////////////");


console.log("////////////////////! no. 13 /////////////////////");
/**
 * CORRECT STATEMENT ARRAY
 *  1. Can hold more than one Value
 *  2. Has .length property
 *  3. Can hold all data type and value including array themselves
 * 
 * WRONG
 * array can hold all data type and value except for object and function?
 */

console.log("////////////////////! no. 14 /////////////////////");
// LET VS CONST

console.log("////////////////////! no. 15 SALAH /////////////////////");
const user = {
    name: 'andika',
    age: 19
}
console.log(user.name); // hasil andika
console.log(user.status); // hasil undefined


console.log("////////////////////! no. 16 /////////////////////");
console.log(String(12) === "12"); // hasil TRUE

console.log("////////////////////! no. 17 SALAH /////////////////////");
const data = [
    'number',
    true,
    { name: 'junior', age: 17},
    () => [{result: 'callback'}]
]
console.log(data[3]()[0]['result']);


console.log("////////////////////! no. 18 /////////////////////");
// the difference between forEach() and map() is?
/*
    forEach() doestn't produce a return or a new array,
    whereas map() produces a new array
*/

console.log("////////////////////! no. 19 SALAH /////////////////////");
const nama = "indra";
const umur = 17;
if (!nama|| !umur) console. log( 'data salah');
else if( nama && umur > 17) console. log( 'sudah dewasa');
else if(nama && umur < 17) console. log( 'belum dewasa' );
else console. log( 'data tidak lengkap' )
console.log("////////////////////! data tidak lengkap /////////////////////");


console.log("////////////////////! no. 19 /////////////////////");
/**
 * while OR do while
 * 
 * In a while loop, the condition Is checked before each Iteration before executing the statements Inside the while loop,
 * whereas In a do while loop, the condition Is checked after the Iteration has run
 */

console.log("////////////////////! no. 21 /////////////////////");
let name = "andika";
name += "julien";
name = "taufik";
console.log(name);

console.log("////////////////////! no. 22 /////////////////////");
let output = "Hello";
if("0" != true) output += ", World!";
console.log(output);

console.log("////////////////////! no. 23 /////////////////////");
// TIME COMPLEXITY => O(N^2)
function checkDuplicate(arr) {
    for(let i = 0; i< arr. length; i++) {
        for(let j = i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) return true;
        }
    }
    return false
    }
console.log(checkDuplicate([1,2,3,1]));

console.log("////////////////////! no. 24 /////////////////////");
// const sentence = "Learn Javascript at Purwadhika";
// sentence.replace("a", "o");
// sentence.split(" ");
// sentence.reverse(); // reverse() isnot function
// console.log(sentence)

console.log("////////////////////! no. 25 /////////////////////");
const fruits = ["Pisang", "Jeruk", "Jambu", "Semangka"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.shift();
console.log(fruits)
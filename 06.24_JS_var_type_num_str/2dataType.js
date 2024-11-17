// BOOLEAN (TRUTH or FALSE)
/*
    FALSE
    1. ""   Empty String
    2. 0
    3. null
    4. undefined
    5. NaN = NOT A NUMBER, perkalian angka dengan huruf, a * 5

    TRUTH
    1. " "  Blank Character String
    2. []   Empty Array
    3. {}   Empty Object
    4. 1
    5. "1"
    6. "0"
    7. "false"
    8. "true"

    TRUE memiliki value DEFAULT 1
*/

const message = "Javascript" // String
const count = 1 // Number
const bigNumber = 98709879769876987698n // bigInteger
const isTrue = true // Boolean
const noData = null // Objek Kosong
let noAssigned // undefined (lupa ngisi data), jika const harus ada isinya kalau tidak ERROR
const object = { // ini untuk menyimpan banyak data didalam scope dan pemisahnya , "koma"
    name: 'joni',
    age: 26
}

console.log(typeof message); // typeof untuk mengetahui tipe data apa ini
console.log(typeof count);
console.log(typeof bigNumber); console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof isTrue);
console.log(typeof noData);
console.log(typeof noAssigned);
console.log(typeof object);

// ANEHHH
console.log("/////////// ANEHH /////////////");
console.log(typeof NaN); // hasil number
console.log(typeof Null); // hasil undefined... BRARTI memberi tanda kosong
console.log(typeof undefined); // hasil undefined... BRARTI EMPTYNESS
console.log(typeof Error); // hasil function
console.log(typeof []); // hasil object
// console.log(typeof ); // hasil error

// Integer, bilangan bulat TANPA KOMA

// FLOAT, bilangan desimal pakai KOMA "."



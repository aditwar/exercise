console.log("////////////////////! LOOPING /////////////////////");
// LOOPING
num.forEach((item) => { // forEach tidak dapat RETURN ARRAY baru
    console.log(item);
});

num.map((item) => { // map dapat RETURN ARRAY baru
    console.log(item);
});

// CONTOH LOOPING MAP
let newNum = num.map((item) => item + 5)
console.log(newNum); // newNum berisi ARRAY yang sudah + 5
// ini bisa dilakukan jika MAP, klw forEach hasilkan undefined

console.log("////////////////////! REDUCE /////////////////////");
// MENJUMLAHKAN SMUA ITEM DI ARRAY
let sumNum = num.reduce((a, b) => a + b) // REDUCE hanya untuk operasi Matematika
console.log(sumNum);

// LOOPING ARRAY => for ... of loop
const fruits = ["apple", "banana", "melon"]
for (let fruit of fruits) { // fruit seperti item itu mewakili setiap array
    console.log(fruit);
}
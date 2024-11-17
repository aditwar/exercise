console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2); // perkalian
console.log(10 / 2);
console.log(10 ** 2); // pangkat
console.log(10 % 2); // modulo, sisa dari pembagian
console.log(10 % 3); // 10 / 3 = 9 sisanya 1


console.log(" //////////////////////////////! CONCAT ////////////////////////////// ");
// CONCAT (MENGGABUNGKAN)
console.log("20" + " 24"); // menghasilkan 2024 bukan 44, kalau operasi yg lain seperti operasi matematika biasanya
console.log("1" + 1 + 1); // menghasilkan 111 karena sudah dibaca string sehingga selanjutnya di gabungkan
console.log(2 * "2" + 1); // jika yg awal sudah operasi selain "+" maka selanjutnya str dianggap angka hasil 5... seperti operasi matematika didahulukan *


console.log(" //////////////////////////////! MODIFIY IN PLACE ////////////////////////////// ");
// MODIFY IN PLACE
let n = 10 // ingin jadi 10 * 2 = 20
n *= 2 // ini cara cepatnya hasil 20
n += 15 // yg  20 + 15 hasil akhir menjadi 35
console.log(n);


console.log(" ////////////////////////////// !INCREMENT ////////////////////////////// ");
// INCREMENT DECREMENT
let count = 5
count++ // penambahan 1
console.log(count);

count-- // pengurangan 1
console.log(count);


console.log(" ////////////////////////////// !PREFIX POSTFIX ////////////////////////////// ");
// POSTFIX PREFIX (penempatan INCREMEN saja)
count++ // post
++count // pre

let preN = 1
console.log(++preN); // hasil 2 berarti dia LANGSUNG menambahkan
let postN = 1
console.log(postN++); // hasil 1 ini tidak langsung //! INI TIDAK LANGSUNG +1



// !PSEUDO CODE untuk memberikan HINT atau petunjuk tiap langkah cara mengkoding dan itu HARUS didalam COMMENT
/*
    Hint:
    1. Find out how to count area of rectangle
    2. length x width = area of reactangle (the formula)
*/
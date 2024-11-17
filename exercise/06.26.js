// BILANGAN GANJIL GENAP
/*
    Check number odd or even, even dapat habis dibagi 2
    1. 25 => ODD, 2 => EVEN
    2. Num % 2 == 0
*/

let num = 10
if (num % 2 == 0) {
    console.log("Number is EVEN");
}   else {
    console.log("Number is ODD");
}


// BILANGAN PRIMA
/*
    Check number PRIME or not, bilangan PRIMA (Bilangan yg bisa dibagi 1 dan bilangan itu sendiri)
    1. 7 => PRIME, 6 => NOT KRN BISA DIBAGI
    2. pakai LOOP, pembagian terus menerus yg dibagi increment
*/

let x = 23;
let divider = 0; // 
for (let i = 1; i <= x; i++) { // i akan berurutan 1, 2, 3, 4, 5, ... sampai 23
    if (x % i == 0) divider++; // ini setiap LOOPING akan mengerjakan pengecekan apakah z modulo i = 0, jika iya maka divider + 1
}
console.log( divider == 2 ? `${x} is a Prime Number` : //   ini yg dihitung dividernya! jika divider = 2 maka Prime
                            `${x} is not Prime Number`); // jika tidak
// &{} untuk mengambil secara langsung

// jika ingin mengecek 1 sampai ke- y?
let y = 10
for (let i = 1; i <= y; i++) { // hanya perlu ditambah ini
    let dv = 0
    for (let z = 1; z <= i; z++) {
        if (i % z == 0) dv++
    }
    console.log(dv == 2 ?   `${i} is a Prime Number` :
                            `${i} is not Prime Number`);
}

// JUMLAH BILANGAN KE
/*
    Find SUM number 1 to N
    1. 5 => 1+2+3+4+5 = 1599
    2. gunakan variabel penampung untuk PENAMBAHAN TIAP ROTASI
    3. ROTASI dimulai dari terkecil, sehingga INCREMENT
*/
let n = 6
let res = 0 // variabel penampung
for (let i = 1; i <= n; i++) { // angka berurutan 1 sampai n
    res += i // dipakai untuk menampung tiap rotasi (res + i), i merupakan rotasi KE-
}
console.log(res);


// FACTORIAL
/*
    Find Factorial Number
    1. 4! => 4 x 3 x 2 x 1 = 24
    2. gunakan variabel penampung untuk PERKALIAN TIAP ROTASI (!= 0)
    3. ROTASI dimulai dari terbesar, sehingga DECREMENT
*/
let m = 4
let bank = 1
for (let i = m; i > 0; i--) {
    bank *= i
}
console.log(bank);


// FIBONACCI
/*
    Print first N fibonacci number, FIBONACCI = penjumlahan 2 bilangan sebelumnya
    1. 15 => 610 (ini berlangsung sampai 15 kali)
    2. variabel sebelum dan sesudah => a, b
    3. TIAP ROTASI =>
        a. PENJUMLAHAN a + b
        b. variabel a => b (var a menjadi b)
        c. variabel b menjadi HASIL PENJUMLAHAN a dan b
    4. hasil b
*/
let p = 15
let a = 0
let b = 1
for (let i = 1; i < p; i++) {
    let nexNum = a + b;
    a = b;
    b = nexNum
}
console.log(b);

// JIKA PAKAI FUNCTION
function fib(n) {
    const res = [0, 1]
    for (let i = 0; i < n; i++) {
        res.push(res[i] + res[i+1])
    }
    return res[n + 1]
}
console.log(fib(3));
console.log(fib(4));
// PERKALIAN 9 INTEGER (MULTIPLICATION)
/*
    Multiplication integer
    1. 9 X 1, 9 X 2, 9 X 3, ... 9 X 10
    2. Peningkatan perkalian
*/
let num = 9
let con = 10
for (let i = 1; i <= con; i++) { // i dimulai dr 1, sampai i <= con
    console.log(`${num} x ${i} = ${num * i}`);
}

// PALINDROME, string yg dibalik kiri ke kanan apakah sama
/*
    MENYUSUN KATA SECARA REVERSE
    1. AYAM => MAYA
        a. mengambil setiap huruf (ditampung)
        b. menyusun menjadi satu kalimat (concat)
    2. PERBANDINGAN VALUE dan TYPE, AYAM == MAYA ?
*/
let str = "ayam";
let bank = ""; // variabel penampung
for (let i = str.length - 1; i >= 0; i--) {
    bank += str.charAt(i) // bank digabungkan dgn karakter ke- i (str.charAt = karakter ke brp dari str)
}
console.log(bank);
console.log(bank == str ? "PALINDROM": "BUKAN");

// CONVERT CM TO KM, pembagian 100k
let cm = 354000;
console.log(cm / 100000 + " km");

// CONVERT NUMBER TO CURRENCY (IDR)
/*
    LOOPING pengambilan karakter dari yg terbelakang dan digabungkan, setiap 3 karakter ditambah titik
    1. Mengubah Number jdi String krn charAt length (hanya untuk String)
    2. Ada variabel penampung karakter, dan variabel penampung hitungan 3
    3. Looping berjalan mundur, action var penampung (karakter ke- i + var penampung), action var hitungan ++
    4. Jika var hitungan habis dibagi 3 & dan panjang Number tidak sama dgn var hitungan => titik ditambahkan
    5. console log var penampung karakter ditambah string Rp dan ,00
*/
let duit = 123456789
let strDuit = duit.toString()
let bnk = "" // variabel penampung setelah digabungkan
let count = 0
for (let i = strDuit.length - 1; i >= 0; i--) {
    bnk = strDuit.charAt(i) + bnk
    count++
    if (count % 3 == 0 && strDuit.length !== count) {
        bnk = "." + bnk
    }
}
console.log("Rp " + bnk + ",00");

// REPLACE KARAKTER
let sTr = "Hello World"
let searchStr = "ell"
console.log(sTr.replace(searchStr, ""));

let stR = "halo halo bandung"
let result = ""
for (let i = 0; i < stR.length; i++) {
    if (i == 0 || stR.charAt(i - 1) == " ") {
        result += stR.charAt(i).toUpperCase()
    } else {
        result += stR.charAt(i).toLowerCase()
    }
}
console.log(result);
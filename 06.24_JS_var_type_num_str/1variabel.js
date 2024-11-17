// Komen 1 baris

/* Komen
2 baris */
console.log(" ////////////////////////////// console.log() ////////////////////////////// ");
console.log("Hello World") // Menampilkan

let message /* DECLARE berupa variabel=message */
message = "Hello" // storage data

// atau bisa langsung

let kata = "abc"
console.log(kata)

console.log(" ////////////////////////////// VARIABEL ////////////////////////////// ");
// VARIABLE
/*  var untuk membuat variabel global dan tidak terbatas
    let untuk membuat cangkupan "scope" dan dapat direplace
    const punya cangkupan scope tapi tidak dapat direplace dan tidak dapat diganti didalam scope
*/

let a = "10"
var b = "20"
{
    let a = 30
    var b = 40 // var bisa tembus tp let tidak, terbatasi SCOPE
}
console.log(a)
console.log(b)
/*
    menghasilkan 10 lalu 40 karena
    let menyesuaikan consoleLog nya yg diluar
    dan var secara global sehingga terupdate (terdekat dengan consoleLog)
*/

console.log(" ////////////////////////////// FUNCTION ////////////////////////////// ");
// jika FUNCTION
let c = 1
var d = 2
function sum(num1, num2) { // let dan var tidak bisa tembus
    let c = 10
    var d = 20
    return num1 + num2
}
console.log(c, d); // hasil 1 dan 2 karena itu didalam function dan hanya bisa diakses jika didalam function

console.log(" ////////////////////////////// LOOPING ////////////////////////////// ");
// jika IF ataupun FOR (LOOP)
let e = 1
var f = 2
if (true) {
    let e = 10
    var f = 20
}
console.log(e, f); // hasil 1 dan 20 karena itu if dan for jadi seperti cangkupan scope umum

for (let i = 0; i < 3; i++) {
    let e = 5
    var f = 6
}
console.log(e, f); // hasil 1 dan 6 sama => kena scope

console.log(" ////////////////////////////// CONSTANT ////////////////////////////// ");
// CONST
const g = 1
var h = 2
for (let i = 0; i < 3; i++) {
    // g = 10 // hasil ERROR krn mau mengedit const yg tidak bisa diedit
    // h = 20
}
console.log(g, h);
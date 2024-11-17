



// LOOPING
let i // i ini bisa jalan karena diluar for dan menjadi console.log
for (i = 0; i < 10; i++) {
    a = 10
}
console.log(i); // hasil 10 karena sudah MULAI DILOOP tapi berhenti saat dicek i < 10

// LOOPING i++
let i // i ini bisa jalan karena diluar for dan menjadi console.log
for (i = 0; i < 10; i++) {
    a = 10
}
console.log(i++); // TETAP hasil 10 karena sudah MULAI DILOOP tapi berhenti (PREFIX)

// TAPIIII
let i // i ini bisa jalan karena diluar for dan menjadi console.log
for (i = 0; i < 10; i++) {
    a = 10
}
console.log(++i); // hasil 11 karena sudah MULAI DILOOP dan bertambah 1 tapi berhenti (POSTFIX)

let i
for (i = 0; i < 10; i++) {
    a = 10
}
i++ // ataupun ++i                     // ini
console.log(i); // klw ini ngejalanin  // ini baru ngejalanin consoleLog


// OBJECT ditandai oleh
let newNum = new Number("10") // ditandai = new Number()


let num = 10
num += true
console.log(num); // hasil 11, true pny value 1

console.log("a" * 1); // NaN
console.log("undefined" * 1); // NaN


// TIPE DATA
const num = new Number("10") // membentuk OBJEK baru dengan mengubah "10" menjadi Number
console.log(num == 10); // hanya mengecek VALUE => TRUE
console.log(num === 10); // mengecek VALUE & TYPE DATA => FALSE krn num berupa OBJEK

// TAPII kalau new dihilangkan
const num = Number("10")
console.log(num === 10); // hasil TRUE, karena tidak menjadi OBJ



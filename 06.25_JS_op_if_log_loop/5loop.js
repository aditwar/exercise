console.log(" //////////////////////////////! LOOP ////////////////////////////// ");
for (let i = 0; i < 10; i++) {// !ini MENINGKAT
    console.log("PASTI SUKSES ke- " + i); 
}
// i berarti LOOPING, let i merupakan awalannya apa, i < merupakan keadaan akhirnya apa, i++ merupakan increment keadaan
// {scope} merupakan hasil setiap LOOPING
// i berarti pengulangan ke berapa

for (let i = 10; i > 0; i--) { // !ini MENURUN
    console.log("Sukses ke- " + i);
}
// ini jika berjalan mundur / pengurangan i--

console.log(" //////////////////////////////! WHILE ////////////////////////////// ");
// INFINITE LOOP (while) => menyesuaikan kondisi dulu baru LOOPING
// while ("true") {
//     console.log("So Bless");
// }

// cara biar TIDAK INFINITE LOOP
let count = 1
while (count <= 10) { //? RANGE / BATASAN AKHIR mencapai kondisi apa
    console.log("so bless - " + count); // ini action
    count++ //? kondisi peningkatan
}

console.log(" //////////////////////////////! DO.. WHILE ////////////////////////////// ");
// DO ...WHILE => LOOPING dulu baru menyesuaikan kondisi
do { //? TANPA () langsung action {}
    console.log("Hello");
} while (false)
// ini hanya menghasilkan Hello 1 kali karena sudah mengerjakan 1 baru lihat kondisi "false" maka berhenti

let x = 1
do {
    console.log("PASTI SUKSES - " + x);
    x++
} while (x <= 10)
// seperti loop for tapi let x kondisi awal, console.log menghasilkan apa dulu, x++ dengan mengerjakan apa, while berupa batas akhir

// BREAK berhenti
let y = 1
while (true) {
    console.log(y);
    if (y == 10) break // berhenti sesuai dengan kondisi if
    y++
}

// CONTINUE, melewati / skip
for (let i = 1; i <= 5; i++) {
    if (i == 3) continue // melewati sesuai kondisi if
    console.log(i);
}
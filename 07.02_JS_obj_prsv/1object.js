// TIPE DATA OBJEK
/*
    CIRI2
    1. NON PRIMITIF
    2. Seperti ARRAY yg menyimpan BANYAK DATA, tapi ini disimpan dalam BANYAK KEY
*/
const car = {
    brand: "BMW",
    tipe: "a700",
    price: "800jt"
}
console.log(car);
console.log(car.brand); // untuk mengakses KEY
console.log(car["tipe"]); // cara 2

// jika objek didalam objek
const rmh = {
    luas: "2 ha",
    daerah: "banyu manik",
    pemilik: "sutedjo",
    alamat: {
        kota: "semarang",
        provinsi: "jawa tengah"
    },
    greet() { // method didalam objek
        console.log("Hello"); 
    }
}
console.log(rmh.alamat.provinsi);
console.log(rmh["alamat"]["provinsi"]); // cara2
rmh.greet() // cara mengakses method didalam objek

// jika ingin add value
rmh.warna = "biru"
console.log(rmh);

// jika ingin delete value
delete rmh.greet
console.log(rmh);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OPTIONAL CHAINING
const sepatu = {
    ukuran: 43,
    warna: "hitam",
    bahan: "kulit",
    /* lapisan: {
        luar: "sole",
        dalam: "midSole"
    },
    */
    greet() { // method didalam objek
        console.log("Hello"); 
    }
}
// console.log(sepatu.lapisan.dalam); // hasil ERROR
// console.log(sepatu.lapisan); // hasil undefined
// console.log(sepatu.lapisan?.dalam); // hasil undefined karena pengecekan dulu sampai KEY lapisan... sehingga tidak ERROR

console.log("////////////////////! PREDEFINED /////////////////////");
// PREDEFINED METHOD
console.log(Object.keys(sepatu)); // untuk memberi tahu macam2 KEY nya itu apa saja


console.log("////////////////////! LOOPING /////////////////////");
// LOOPING for ... in
for (let key in sepatu) {
    // console.log(key);
    console.log(sepatu[key]); // memberi tahu macam2 VALUE PADA KEY nya itu apa saja
}

console.log("////////////////////! DESTRUCTING /////////////////////");
// DESTRUCTURING ASSIGNMENT, cara singkat PANGGIL KEY
const {ukuran, warna} = sepatu
console.log(ukuran, warna);

console.log("////////////////////! SPREAD /////////////////////");
// SPREAD OPERATOR, cara cepat mengcopy semua VALUE didalam ARRAY atau OBJECT
const objOne = {
    name: "David"
}
const objTwo = {
    email: "wardanaaditya49@gmail.com"
}
const finalObject = {
    ...objOne, // SPREAD OPERATOR
    ...objTwo
}
console.log(finalObject);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// THIS, jika didalam object maka yg dimaksud objek itu
const person = {
    name: "Adit",
    greeting() {
        console.log(`Hello ${this.name}`); // ${} untuk mengambil value itu di Object ini
    }
}
person.greeting()

const num = new Number("10")
console.log(num);

// cara mengakses didalam object
const arr = [
    "Apple", // string biasa
    ["Banana", "Kiwi"], // array
    {fruits1: "Melon", fruits2: "Lemon"}, // object
    () => ["Manggo"] // method
]

let x = () => ["Mango"]

console.log(arr[1][0]);         // hasil Banana
console.log(arr[2].fruits1);    // hasil Melon
console.log(arr[3]()[0]);       // hasil Manggo
console.log(x()[0]);            // hasil Mango dari let x
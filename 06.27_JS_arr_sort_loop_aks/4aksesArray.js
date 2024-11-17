console.log("////////////////////! AKSES ARRAY /////////////////////");
// CARA AKSES
const arr3 = [
    "Apple",
    [ "Banana", "Kiwi"],
    { fruit1: "Melon", fruit2: "Lemon"},
    () => ["Manggo", "Pepaya", "Duren"]
]

let x = () => ["Manggo"] // x()[0]

console.log(arr3[0]); // hasil Apple
console.log(arr3[1][1]); // hasil Kiwi
console.log(arr3[2].fruit1); // hasil Melon
console.log(arr3[3]()); // hasil [ 'Manggo', 'Pepaya', 'Duren' ]
console.log(arr3[3]()[2]); // hasil Duren
console.log(x()[0]); // hasil Manggo
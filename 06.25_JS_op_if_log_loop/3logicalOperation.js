console.log(" //////////////////////////////! LOGICAL OPERATIORS ////////////////////////////// ");
// LOGICAL OPERATORS
let x = 6
let y = 3
console.log(x < 10 && y > 1); //    apakah 6 < 10 & (dan) 3 > 1 => maka TRUE & TRUE hasil TRUE hanya jika keduanya TRUE
console.log(x == 5 || y == 5); //   apakah 6 == 5 || (atau) 3 == 5 => maka FALSE / FALSE hasil FALSE kecuali salah satu TRUE maka hasil TRUE
console.log(!(x == y)); //          apakah TIDAK 6 == 3 => maka !(FALSE) menjadi TRUE (kebalikannya)

// CONTOH
if (car === "BMW" || car === "TOYOTA") {
    console.log("This car is awesome");
}
// jika car salah satu dari itu maka menghasilkan This car is awesome


// TENARY OPERATOR seperti IF n ELSE IF
const str = "JavaScript"
console.log(str == "JavaScript" ? "JavaScript" : "Not JavaScript");
// apakah str Js ? kalau iya hasil Js, kalau tidak hasil Not Js

console.log(str == "JavaScript" ? "JavaScript" :
            str == "PHP" ? "PHP" :
            "Not JavaScript n PHP");
// ini kalau menggunakan ELSE IF
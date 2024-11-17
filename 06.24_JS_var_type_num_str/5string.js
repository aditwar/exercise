const str = "Hello Purwadhika"
const strUpper = str.toUpperCase()
console.log(strUpper)

const newStr = str.replace("e", "a") // mengganti huruf
console.log(newStr);



// atau bisa langsung seperti ini

console.log("apel merah".replace("ah","ih")); // ini bisa spesifik ke huruf apa

console.log("apel merah".replaceAll("a","i")); // ini bisa mengganti smua huruh a

console.log(str.charAt(4)); // ini mengambil karakter ke berapa dimulai dari 0 bukan 1

console.log("Hello".concat(" World")); // ini untuk menggambungkan menjadi 1 kalimat


let name = "David"
let message = `Hello, ${name}` // BACKTICK dapat berupa DECLARE
console.log(message);
// FUNCTION tidak perlu menulis ulang code
function sum(a, b) {    // a b penamaan PARAMETER input, sum = NAMA FUNCTION
    return a + b        // return untuk mengembalikan nilai
}
console.log(sum(10, 5)); // 10 5 penamaan ARGUMEN, nama function (sum) harus dipanggil dulu

// ATAU penulisannya seperti ini
function hub(no1, no2) {
    let result = no1 + no2
    return result
}
console.log(hub(23, 24));

console.log("////////////////////! EXPRESSION /////////////////////");
// FUNCTION EXPRESSION, disimpan dulu dalam Variabel
const square = function (number) { // penamaan function sudah diVARIABEL
    return number * number
}
console.log(square(10));

console.log("////////////////////! SCOPE /////////////////////");
// FUNCTION SCOPE, variabel yg hanya bisa diakses didalam FUNCTION
function greeting() {
    let hello = "GANTENG"
    return hello
}
// console.log(hello);     // ini hasil UNDEFINED, karena hanya bisa diakses didalam FUNCTION

console.log("////////////////////! DEFAULT /////////////////////");
// DEFAULT PARAMETER, diberikan jika ARGUMEN tidak memenuhi
function jml(num1, num2 = 0) {
    return num1 + num2
}
console.log(jml(12));       // hasil 12, bukan NaN karena num2 default 0

console.log("////////////////////! REST /////////////////////");
// REST PARAMETER, parameter yg dapat mewakili ARGUMEN yang melebihi PARAMETER yg sudah ditentukan
function sum(c, d = 0, ...more) {
    console.log(more);      // ini untuk menampilkan ARGUMEN yg melebihi itu
    return c + d
}
console.log(sum(11, 22, 44, 55, 66, 77, 88));

console.log("////////////////////! NESTED /////////////////////");
// NESTED FUNCTION, function di dalam function
function getMessage(firstName) {
    function sayHello() {
        return "Hello " + firstName + "."
    }
    function welcomeMessage() {
        return "Welome to purwadhika!"
    }
    return sayHello() + " " + welcomeMessage()
}
console.log(getMessage("David"));

console.log("////////////////////! CLOSURE /////////////////////");
// CLOSURE, NESTED function yang dapat mengakses variabel dan parameter diluar sekalipun sudah di RETURN
function greeting(name) {
    const defaultMessage = "Hello ";
    return function() {
        return defaultMessage + name // defaultMessage, variabel yg diluar function //! HASIL AKHIR
    }
}
const greetingDavid = greeting("GANTENG")
console.log(greetingDavid());

console.log("////////////////////! CURRYING /////////////////////");
// CURRYING, proses TRANSFORMASI fungsi => beberapa fungsi
function muliplier(factor) {
    return function (number) { // FUNCTION yg terpecah menjadi DECENDENT (Anak2nya)
        return factor * number //! HASIL AKHIR 10 X 3
    }
}
const mul3 = muliplier (3) // function itu dinamai mul3 dan 3 merupakan factor
console.log(mul3(10));

console.log("////////////////////! RECURSIVE /////////////////////");
// RECURSIVE, function yg dapat memanggil dirinya sendiri sampai SELESAI
function countDown(fromNumber) {
    console.log(fromNumber);
    let nextNumber = fromNumber - 1
    if (nextNumber > 0) {
        countDown (nextNumber)
    }
}
countDown (5)




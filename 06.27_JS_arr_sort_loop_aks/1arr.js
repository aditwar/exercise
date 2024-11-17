// ARRAY untuk menyimpan banyak data yg TYPE sama
let arr = ["a","b","c","d","e"] // cara PERTAMA buat ARRAY
let arr2 = new Array ("a", "b", "c", "d", "e") // cara KEDUA

// cara mengambil ARRAY ke brp, catatan index dimulai dri 0
console.log(arr[3]); // hasil c


let num = [1, 2, 3, 4, 5]

num.push(6) //  push() merupakan method yg MENAMBAHKAN paling belakang
num.pop() //    pop() MENGHAPUS value paling belakang

num.unshift(0) //unshift () menambah value didepan
num.shift() //  shift() menghapus value didepan

num.splice(1, 0, 2, 3) // 0 disini untuk menghindari ada yg dihapus
num.splice(1, 2) // menghapus index ke 1, sebanyak 2

console.log("////////////////////! BUAT VARIABEL /////////////////////");
// HARUS DIBUAT VARIABEL
const newNum2 = num.concat([6, 7, 8])
console.log(newNum2);







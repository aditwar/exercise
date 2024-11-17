// membuat PATTERN TRIANGLE
/*
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    Example: input 5
*/


// with SORT
function minMax(arr) {
    arr.sort((a, b) => a - b)
    const lowest = arr [0] // [] untuk mengambil array index ke berapa
    const highest = arr[arr.length - 1]
    const average = arr.reduce((a, b) => a + b) / arr.length // reduce() = menjumlahkan smua
    return { lowest, highest, average }
}
console.log(minMax([12, 5, 23, 18, 4, 45, 32]));

// without sort
function minMax2(arr) {
    let lowest = arr[0]
    let highest = arr[0]
    const average = arr.reduce((a, b) => a + b) / arr.length
    for (let i = 1; i < arr.length; i++) { // let i = 1 karena arr [0] sudah index ke 0
        if (arr[i] < lowest) lowest = arr[i] // jika arr ke - i lebih kecil dri lowest yg skrng maka lowest nya diganti itu
        if (arr[i] > highest) highest = arr[i] // jika arr ke - i lebih besar dri highest yg skrng maka highest nya diganti itu
    }
    return { lowest, highest, average }
}
console.log(minMax2([12, 5, 23, 18, 4, 45, 32]));

// dengan PREDEFINED METHOD
function minMax3(arr) {
    const lowest = Math.min(...arr) // ...arr untuk mengambil arr yg dimaksud
    const highest = Math.max(...arr)
    const average = arr.reduce((a, b) => a + b) / arr.length
    return { lowest, highest, average }
}
console.log(minMax3([12, 5, 23, 18, 4, 45, 32]));

// Math.min
console.log(Math.min(1, 3, 0, 6, 8)); // ini hanya bisa dimasukkan tanpa ARRAY

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// CONCAT
function concat(arr) {
    const removedItem = arr.pop() // pop() untuk menghilangkan arr terakhir
    return arr.join(", ") + ", and " + removedItem // variabel removedItem itu berisi arr.pop()
}
console.log(concat(["apple", "banana", "cherry", "date"]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SORT lalu ambil no 2 terkecil
function secondSmall(arr) {
    arr.sort((a, b) => a - b)
    return arr[1]
}
console.log(secondSmall([5, 3, 1, 7, 2, 6]));

// jika di arr ada no terkecil lbih dri 1 maka

function secondSmall2(arr) {
    arr.sort((a, b) => a - b)
    let i = 0
    while (i < arr.length) {
        if (arr[i] > arr[0]) {
            break
        }
        i++
    }
    return arr[i]
}
console.log(secondSmall2([5, 3, 1, 7, 2, 6, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// menjumlahkan 2 kelompok ARRAY
function sumArray(arr1, arr2) {
    return arr1.map((val, idx) => val + arr2[idx]) // didalam map terdapat val value dan idx index... val berarti nilainya dan idx berarti data ke- i
}
console.log(sumArray([1, 2, 3], [3, 2, 1]));

// CARA2 dengan push()
function sumArray2(arr1, arr2) {
    const res = [] // res penyimpanan
    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i]) // penyimpanan itu ditambahkan ke urutan paling belakang
        }
    return res
}
console.log(sumArray2([1, 2, 3], [3, 2, 1]));

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ini menambahkan ARRAY yang belum pernah ada
function newUpdate(arr, newNum) {
    for (let item of arr) { // item dari arr
        if (item == newNum) {
            return arr
        }
    }
    arr.push(newNum) // menambahkan newNum bagian terakhir
    return arr
}
console.log(newUpdate([1, 2, 3, 4], 4))
console.log(newUpdate([1, 2, 3, 4], 7))

// CARA2 dengan if
function newUpdate2(arr, newNum) {
    if (arr.includes(newNum) == false) { // include() berarti sudah ada belum value itu, false jika itu belum ada maka...
        arr.push(newNum)
        return arr
    }
}
console.log(newUpdate([1, 2, 3, 4], 3))
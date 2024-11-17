// PENYIMPANAN DATA
// Stack, penyimpanan data secara tumpukkan sehingga jika ingin mengambil harus diambil yg paling atas (terakhir) LiFo Last in First out => method push() dan pop() menambah dan menghapus data paling belakang

// Queue, antrian FiFo First in First Out... kebalikan dari STACK
// contoh:  Antrian Email, kirim chat WA dengan
//          method enqueue() => push menambah data dari belakang
//          method dequeue() => shift menghapus data dari yg terdepan/ awal

// SET, tidak menerima duplikat VALUE... jika nekat dibuang (HANYA UNIK SAJA)
const fruits = ["Apple", "Banana", "Melon", "Banana"]
const newFruits = new Set(fruits) // Set() langsung menerapkan UNIK
console.log(newFruits);

newFruits.delete("Melon") // delete untuk menghapus
console.log(newFruits);

newFruits.add("Semangka") // add untuk menambahkan 
console.log(newFruits);

console.log(newFruits.has("Apple")); // untuk mengecek apakah sudah ada / tidak

newFruits.forEach((item) => { // untuk meLOOPing
    console.log(item); // ini akan menghasilkan looping an tiap item tersendiri
})

// Hash Table/ MAP, dengan adanya KEY DAN VALUE sama persis seperti OBJECT
const myMap = new Map()

myMap.set("David", "001") // Map() ini harus ada 2 parameter KEY dan VALUE
myMap.set(10, "John")
myMap.set(true, "Benar")
myMap.set("", null)

console.log(myMap); 
console.log(myMap.get(true)); // get() untuk menangkap/ mengakses key maka dapat BENAR
console.log(myMap.keys()); // keys() untuk menampilkan key nya ada apa saja

// LINKED LIST, link antara data bisa searah, 2 arah (bolak balik), bisa searah dan berputar, bisa bolak blik dan berputar :)
/*
    1. Single linked list, hanya searah
    2. Double linked list, bolak balik 2 arah (ada ujungnya)
    3. Circular linked list, hanya searah (tidak ada ujungnya/ melingkar saja)
    4. Circular double linked list, 2 arah dan dapat melingkar
*/

// 1. Single linked list
const list = {
    head: {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: null,
            }
        }
    }
}
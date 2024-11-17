// LINIER SEARCH
function searchLinier(arr, x) {
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }
    }
    return -1 // artinya tidak ditemukan
}
console.log(searchLinier([2, 10, 3, 20], 20)) // hasil 3

// BINARY SEARCH, mengambil nilai tengah dan dilihat apakah lebih besar atau lebih kecil
function binarySearch(arr, l, r, x) { //l = left, r = right
    if (r >= l) {
        let mid = l + Math.floor((r - 1) / 2) // Math.floor = pembulatan ke bawah, Math.round = pembulatan secara matematika
        if (arr[mid] == x) return mid
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x)
        return binarySearch(arr, mid + 1, r, x)
    }
    return -1 // jika FALSE maka menjalankan return => jika tidak ada didalam ARRAY maka hasilnya -1
}
let arr = [2, 3, 4, 10, 40]
let x = 10
console.log(binarySearch(arr, 0, arr.length - 1, x));
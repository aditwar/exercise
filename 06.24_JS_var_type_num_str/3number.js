const num = 10
const numStr = num.toString() // mengubah angka menjadi huruf
console.log(numStr)
console.log(typeof numStr)

// parseInt, turn to Number tanpa koma
parseInt('24') // 24
parseInt('24.987') //24
parseInt('28harikemudian') // 28

// parseFloat, turn to Number dengan koma
parseFloat('24.988') // 24.988
parseFloat('i ate 3apple') // NaN

// RADIX parseInt
console.log(parseInt("13", 4)); // hasil 7
// radix 4 => ( 1 * 4^1 +
//              3 * 4^0)
// yg mau dirubah ke Number 13 terdiri dari puluhan 1 dan satuan 3
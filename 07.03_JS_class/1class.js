// CLASS = template untuk membuat OBJECT... membuat sama persis dengan properti dan method yg sama
// contoh
const person = {
    name: "Andi",
    email: "andi@gmail.com",
    greet() {
        return "Hello, " + this.name
    }
}

class Person { // ditandai dengan penamaan huruf kapital "Person"
    name;
    email; // name; email; ini untuk mereplace... jika dihilangkan maka akan membuat baru

    constructor(nama, surel) { // ini untuk menangkap key yg di DECLARE lewat new Person
        this.name = nama
        this.email = surel
    }

    greet() {
        return "Hello, " + this.name
    }
}

const person1 = new Person("Budi", "budi@gmail.com") // ini untuk membuat objek dengan CLASS
const person2 = new Person("GANTENG", "ganteng@gmail.com")

console.log(person1); // ini hanya menampilkan key saja tanpa method greet()
console.log(person2.greet()); // ini untuk menampilkan method greet saja

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ACCESS MODIFIER
// PRIVATE, hanya menambah #didepan kata sja
class Mobil {
    brand;
    #model; // ini bersifat PRIVATE... tidak dapat diakses dari luar... nekat? UNDEFINED
    static roda = "4 roda";
    kaca;
    warna;

    constructor(merk, tipe, jendela = "4 buah", color = "hitam") { // jika variabel nya tidak diisi maka bisa menggunakan nilai DEFAULT (color = "hitam")
        this.brand = merk;
        this.#model = tipe;
        this.kaca = jendela;
        this.warna = color;
    }

    // agar bisa diakses menggunakan method
    getModel() {
        return this.#model
    }
}
const car1 = new Mobil ("BMW", "k700") // ini untuk mendefinisikan objek itu menggunakan urutan (merk, tipe, jendela, color)

console.log(car1);
console.log(car1.getModel()); // untuk mengakses PRIVATE #model
console.log(Mobil.roda); // mengakses static (secara default) sudah ada... jdi menggunakan nama CLASS nya

// contoh penggunaan
Math.max() // ini langsung menggunakan nama CLASS
const now = new Date() // Date() ini juga merupakan nama CLASS
Math.PI // ini juga sama nggunakan nama CLASS Math dan properti PI (3.14)

console.log("////////////////////! ENCAPTULATION /////////////////////");
// ENCAPTULATION, biar lebih flexible dan bisa ditambah function
class Employee {
    constructor() {
        this.employeeName;
    }
    getEmployeeName() {
        return this.employeeName
    }
    setEmployeeName(name) {
        if (typeof name !== 'string') { // ini function nya sehingga jika nama yg dimasukkan bukan STRING maka ERROR dgn keterangan "nama harus STRING"
            throw new Error("nama harus STRING")
        }
        this.employeeName = name
    }
}
const employee1 = new Employee()
employee1.setEmployeeName("David")
console.log(employee1.getEmployeeName());
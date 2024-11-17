

class Product {
    constructor() {
        this.productName;
        this.productPrice;
    }
}

class Book extends Product { // extends memberi tanda itu merupakan turunan dari Product
    constructor() {
        super() // method untuk mengambil dari induk (Product)
        this.author
    }

    setProductName(name) { // masuknya lewat method bukan constructor
        this.productName = name
    }

    setProductPrice(nominal) {
        this.productPrice = nominal
    }

    setAuthor(authorName) {
        this.author = authorName
    }

    getAuthor() {
        return this.author
    }
}
const book = new Book() // book
const product = new Product() // product

book.setAuthor("Supriadi")
book.setProductName("Buku Pintar")
book.setProductPrice("1jt")

console.log(book);

console.log(book instanceof Book); // instance of, untuk mengecek apakah itu merupakan turunan dari kelas itu
console.log(book instanceof Product); // hasil TRUE

console.log(product instanceof Book); // hasil FALSE, karena product merupakan turunan dari Product
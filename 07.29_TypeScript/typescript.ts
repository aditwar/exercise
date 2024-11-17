// TYPE SCRIPT sama seperti JAVASCRIPT tapi menggunakan tipe data dan itu tidak dapat diubah tipe datanya
let num: number = 10        //! variabel yg sudah di DIVINE TIPE DATA nya (: number)
let str: string = "John"

// ARRAY
const arrNum: number[] = [1, 2, 3, 4, 5] // jika dimasukkin STRING pasti ERROR

//OBJ = interface dan type itu sama tapi ada kelebihan kekurangan
interface IUser {
    name: string;   //! ini wajib di isi
    email: string;  //! ini wajib di isi
    age?: number //? "?" untuk memberi tanda OPTIONAL jdi tidak diisi tidak apa2
}

// OBJ type menggunakan "="
type User = {
    name: string;
    email: string;
    age?: number
}

// Pengisian melalui ini, "user1: IUser" tipe datanya IUser
const user1: IUser = {
    name: "John",
    email: "john@gmail",
    age: 20
}

// FUNCTION
function jml(a: number, b: number): number { // ": number" yg terakhir untuk menentukan hasilnya, jika FUNCTION ini tidak ada RETURN maka diganti ": void"
    return a + b
}
jml(10, 5) 
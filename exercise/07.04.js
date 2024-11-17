// FUNCTION untuk mengecek apakah EQUAL tidak
function checkEqual(obj1, obj2) {
    return obj1.a === obj2.b
}
console.log(checkEqual({a: 2}, {b: 1}));
console.log(checkEqual({a: "Hello"}, {b: 1}));
console.log(checkEqual({a: 1}, {b: 1}));
console.log(checkEqual({a: "1"}, {b: 1}));

// EQUAL, perbandingan antara OBJECT {} ataupun ARRAY [] selalu FALSE sekalipun isinya sama persis
// ini karena OBJECT dan ARRAY selalu bisa diupdate tetapi memberikan "pointer" yang BERBEDA
console.log({} == {}); // hasil FALSE
console.log([] == []); // hasil FALSE

// jika ingin menghasilkan TRUE
const person1 = {
    name: "Andi",
    age: 20
}
const person2 = person1
console.log(person1 === person2); // ini baru bisa TRUE

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION untuk melihat intersection (adanya kesamaan)
function interEqual(obj1, obj2) {
    const res = {}
    for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
            res[key] = obj1[key] // HASIL
        }      
    }
    return res
}
console.log(interEqual({ a: 1, b: 2 }, { a: 1, c: 3 })); // ini berarti objek dengan key

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION MERGE TWO ARRAY AND REMOVE DUPLICATE
function merge(arr1, arr2) {
    arr2.forEach(student => { // cara LOOPING ARRAY
        const idx = arr1.findIndex((value) => value.name == student.name && value.email == student.email)
        if (idx == -1) arr1.push(student)
    });
    return arr1
}

const arrStd1 = [
    { name: "Student 1", email: "student1@gmail"},
    { name: "Student 2", email: "student2@gmail"}
]

const arrStd2 = [
    { name: "Student 1", email: "student1@gmail"},
    { name: "Student 3", email: "student3@gmail"}
]

console.log(merge(arrStd1, arrStd2));


// SWITCH VALUE into PROPERTY in ARRAY
function switchArr(obj) {
    let resv = {}; // {} karena berupa objek dengan banyak KEY
    for (let key in obj) {
        resv[obj[key]] = key // resv itu menampung value yg ada di key  obj[key] "David" dan ditukar dengan key "name"
    }
    return resv
}
console.log(switchArr({ name: "David", age: 20, email: "david.gmail"}));


// FACTORIAL, function yg memanggil dirinya sendiri
function factorial(n) {
    return n == 0 ? 1 : n * factorial(n - 1); // jika n == 0, maka nilai 1 jika tidak n x nilai faktorial dari n - 1
}
console.log(factorial(5));
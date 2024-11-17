// CONDITIONAL STATEMENT

let age = 15
if (age >= 17) {
    console.log("You can get ID CARD"); // console.log ini berada dalam scope karena dikondisi if
}   else {
    console.log("You aren't get ID CARD");
}

let grade = "B";
if (grade === "A") {
    console.log("Excelent Result!");
}   else if (grade === "B") {
    console.log("Great Result!");
}   else if (grade === "C") {
    console.log("Average Result!");
}   else {
    console.log("Invalid Grade!");
}

// SWITCH CASE, untuk membuat keputusan dan HANYA SAMA DENGAN (=) di case "A"
switch (grade) {
    case "A":
        console.log("Excelence Result")
        break;
    case "B":
        console.log("Great Result")
        break;
    default:
        console.log("Invalid Result")
        break;
}


// PERBEDAAN IF ELSE n SWITCH CASE
/*  IF ELSE
    lebih fleksibel

    SWITCH CASE
    hanya bisa digunakan = sama dengan (definisi) 
*/

// Bai 4 Chu vi Dien Tich hinh tron voi Pi Math

const PI = Math.PI
const ra = prompt("so R")

const cv1 = 2* PI * ra
const dt2 = PI * ra * ra 

console.log (`Chu vi : ${cv1}`)
console.log (`Dien Tich : ${dt2}`)



// Bai 5 Chu vi hinh Chu nhat 


const a = prompt("So A")
const b = prompt("so B")
const dt = a * b
const cv = (a + b) * 2; 

console.log (`Chu vi : ${cv}`);
onsole.log (`Dien tich : ${dt.toFixed(2)}`) // Wie :.2f in Python





// bai 6 Durchschnitt Funkte von 3 Noten


let note1 = Number(prompt("Note 1 eingeben :"))
let note2 = Number(prompt("Note 2 eingeben: "))
let note3 = Number(prompt("Note 3 eingeben: "))

let durchschnitt = (note1 + note2 +note3 ) / 3

console.log ( "Durchschnitt sind :",durchschnitt)
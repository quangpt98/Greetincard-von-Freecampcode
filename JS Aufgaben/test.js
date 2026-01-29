
 
// user input

// let fullName = prompt( "Bitte Full Name eingeben: ")
// console.log(fullName)
// console.log ("Herzlich willkommen " + fullName)


// output cua Variable

let nummerA= 30;
let nummerB= 35;

// ersten schritt
console.log("Nummer A ist : " + nummerA + " und Nummer B ist : " + nummerB)

// Zweiten Schritt

console.log("Nummer A ist:" , nummerA ,"nummer B ist:", nummerB)

// Dritten Schritt mit Shift + `
console.log(`Nummer A ist: ${nummerA} und nummer B ist: ${nummerB}`) 

// Vierten Schritt mit %s

let a = 50 
    b = 20
    summe = a*b;

console.log(`Summe: von %s multipliziert %s ist gleich %s`, a, b, summe)


// Aufgaben
let soA= Number(prompt("xin hay nha so A: ")) // oder man kann auch mit parseInt(Interger also Ganze Zahlen) oder parseFloat(Zahlen mit Komma)
soB = 35;

console.log(`Summe: ${soA + soB}`);


let e= 5
f= 2 

e-= (f+1) 
console.log(e)



///toFixed(2) ähnlich bei python Round(A,2) oder :.2f

let a = 5

let ka = Math.sqrt(a)

console.log(Number(ka.toFixed(2)))

// Power Zahl 1 hoch Zahl 2

let kab = Math.pow(2,6) // ist Gleich 2^6
console.log(kab)


// Math.random() 

let a = parseInt(Math.random()*6 +1);

console.log(`du hast ein ${a} gewürfelt`)



// If else if und else 

let kg = 78
let hohe =1.70
let BMI = kg / (hohe ^2)


if (BMI < 15){
  console.log("Than Hinh qua gay")
}
else if (BMI >= 15 && BMI < 16) {
  console.log("Than hinh Gay")
}
else if (BMI >= 16&& BMI < 18.5) {
  console.log("Than hinh Hoi gay")
}
else if (BMI >= 18.5 && BMI < 25) {
  console.log("Than hinh Binh thuong")
}
else if (BMI >= 25 && BMI < 30) {
  console.log("Than hinh Hoi beo")
}
else if (BMI >= 30 && BMI < 35) {
  console.log("Than hinh Beo")
}
else {
  console.log("Thanh Hinh Beo")
}
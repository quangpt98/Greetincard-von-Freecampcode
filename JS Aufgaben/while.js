// let countdownValue = 10;

// while (countdownValue > 0) {
//     console.log(countdownValue)
//     countdownValue--
    
// }
// console.log("Start!")

// let startNumber = 0;
// limit = 25;
// count=0;

// while (startNumber <= limit) {
//     console.log(startNumber);
//     startNumber += 5;
//     count++;
    
    
// }
// console.log("Count Zahl: "+count)

//Aufgaben 3
// let number = 12345;
// sum = 0;
// console.log(number)
// while (number > 0) {
    
//     const lastDigit = number %10;
//     sum += lastDigit;
//     number = Math.floor(number/10);

// }
// console.log(`Die Summe der Ziffern ist: ${sum}`)


// Aufgaben 4
// let a = 0;
// b = 1;
// limit = 50;

// while (a < limit){
//     console.log(a);
//     next = a + b;
//     a = b;
//     b = next;
// }

// Aufgaben 5

// let capital = 1000;
// target = 2000;
// rate = 0.05;
// years = 0

// while (capital < target){
//     console.log(capital)
//     capital = capital *(1+ rate)
//     years++
// }
// console.log (`Es wurden ${years} benötigen`)
// console.log (`Endcapital ist; ${capital.toFixed(2)}€`)


// Aufgaben 6

let userInput = ""
attempt = 0;
while (userInput !== "password123"){
    attempt++
    
    if (attempt === 3) {
        userInput = "password123"
    }
    if (userInput !== "password123"){
    console.log("Ungültige Eingabe, Versuch Nr."+attempt)
    }
}
console.log("Login Erfolgreich nach " + attempt + " versuchen")

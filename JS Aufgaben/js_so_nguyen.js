let input = Number(prompt("Xin hãy Nhập số Nguyên n! : "));


while(!Number.isInteger(input) || input< 0) {
    
    input = Number(prompt("Số không khả dụng, xin hãy nhập lại: "));

}
console.log(input);

let gt = 1;

for (i = 1 ; i <= input; i++){
    console.log(i);
    gt *= i;

}
console.log(`${input}! là = ${gt}`);
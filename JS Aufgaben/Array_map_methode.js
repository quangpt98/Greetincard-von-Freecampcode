// const number = [1,2,3,4,5,6];

// const doubled = number.map((abc) => abc*2); // arrow function

// console.log(doubled)

// const users = [
//     {id: 1, name: "quang", age: 15},
//     {id: 2, name: "Giang", age: 15},
//     {id: 3, name: "Khang", age: 15},

// ];

// const names = users.map((user) => user.name)

// console.log(names)

const config = {
    calculate(value){
        return value * 3;
    }
};

const m2 = [1,2,3];

const kq = m2.map(function(vl) {
    return this.calculate(vl); 
});

console.log(kq)





// sudo apt install nodejs
// node file.js // execute js file in terminal


// let is the new var in js
// const is new type of variable which cannot be changed

const a = 54;
// a = 55; // will give error
console.log(a);

const multiply = (var1, var2) => {
    return var1 * var2;
}
console.log(multiply(2, 3));

// Classes

class Human {
    constructor(){
        this.gender = 'Male';
    }
    printgender(){
        console.log(this.gender);
    }

    // surname = 'Pane';
    // printsurname = () => {
    //     console.log(this.surname);
    // }
}
class Person extends Human{
    constructor(){
        super();
        this.name = 'Max';
    }
    printname(){
        console.log(this.name);
    }
}

const person = new Person();
person.printgender();
person.printname();
// person.printsurname();

// obj and array are reference types
// Spread
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
arr1.push(5);
console.log(arr1, arr2);

const arr3 = [...arr1, 6, 7];
console.log(arr3);

const arr4 = [...arr3];
arr3.push(8);
arr4.push(9);
console.log(arr4, arr3);

// REST, can pass as many arguments as we like, it stores in array
const filter = (...arggss) => {
    return arggss.filter(el => el === 1);  
}

// Array Destructing 
[num1, , num3] = arr4;
console.log(num1, num3);

// const doublearr4 = numbers.map((num) => {
//     return num * 2;
// });
// console.log(arr4, doublearr4);


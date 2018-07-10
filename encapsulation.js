//Procedural Programming

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage (baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}
getWage();

//OOP Encapsulation
var employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
x = employee.getWage();

console.log(x);

//Methods
var employeen = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWages(){
        return this.baseSalary + (this.overtime * this.rate);
    }
}
s = employeen.getWages();
console.log(s)


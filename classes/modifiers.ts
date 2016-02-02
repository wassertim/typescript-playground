class Animal {
    private name:string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal {
	constructor() { super("Rhino"); }
}

class EmployeePerson {
    private name:string;
    constructor(theName: string) { this.name = theName; }
}

var animal = new Animal("Goat");
var rhino = new Rhino();
var employee2 = new EmployeePerson("Bob");

animal = rhino;
animal = employee2; //error: Animal and Employee are not compatible

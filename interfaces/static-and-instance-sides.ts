//Static And Instance Sides Of A Class
interface ClockInterface {
    new (hour: number, minute: number);
}

class Clock implements ClockInterface {
    currentTime: Date;
    //This is the static side of a class.
    //Only the instance side is checked by the compiler.
    //The compiler does not include the constructor to the check.
    constructor(h: number, m: number) { }
}

//var clockMaker: ClockInterface = Clock;
//var clock = new clockMaker(2, 50);

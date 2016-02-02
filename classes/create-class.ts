class Car {
    engine: string;
    constructor (engine: string) {
        this.engine = engine;
    }

    start() {
        return "Started " + this.engine;
    }
} 

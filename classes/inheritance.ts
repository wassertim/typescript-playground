class Auto {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
}

class ManlyTruck extends Auto {
  bigTires: boolean;
  constructor(engine: string, bigTires: boolean) {
      super(engine);
      this.bigTires = bigTires;
  }
}

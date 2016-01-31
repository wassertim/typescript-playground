//Object's shape
interface ICountry {
  title: string;
  getPopulation(): number;
}

interface ICity {
  title: string;
  population: number;
}

var city = <ICity>{};
city.title = 'berlin';
city.population = 2000000;

var city2: ICity = {
  title: 'berlin',
  population: 2000000
};

class City implements ICity {
  title: string;
  population: number;
  country: ICountry;

  constructor(title: string, population: number, country: ICountry) {
    this.title = title;
    this.population = population;
    this.country = country;
  }
}

var berlinCity = new City('Berlin', 2000000, new Country('Germany', 80000000));

//Function Types
interface IJQuery {
  (selector: String): any;
}

var jQuery: IJQuery;
jQuery = function(s: String) {
  return null;
}

var element = jQuery('.content');

//Array Types
interface StringArray {
  [index: number]: string;
}

var myArray: StringArray;
myArray = ["Bob", "Fred"];

interface Dictionary {
  [index: string]: string;
  length: number;    // error, the type of 'length' is not a subtype of the indexer
}

var dicArray: Dictionary;
var value = dicArray['1'];

//Static And Instance Sides Of A Class
interface ClockInterface {
    new (hour: number, minute: number);
}

class Clock implements ClockInterface  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

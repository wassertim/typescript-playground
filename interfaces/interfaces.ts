
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

//Function Types
interface IJQuery {
  (selector: String): any;
}

var jQuery: IJQuery;
jQuery = function(s: String) {
  return null;
}

var element = jQuery('.content');

//Object's shape
interface ICountry {
  title: string;
  getPopulation(): number;
}

interface ICity {
  title: string;
  population: number;
}

var berlin = <ICity>{};
berlin.title = 'Berlin';
berlin.population = 3502000;

var moscow: ICity = {
  title: 'Moscow',
  population: 11920000
};

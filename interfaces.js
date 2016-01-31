var city = {};
city.title = 'berlin';
city.population = 2000000;
var city2 = {
    title: 'berlin',
    population: 2000000
};
var City = (function () {
    function City(title, population, country) {
        this.title = title;
        this.population = population;
        this.country = country;
    }
    return City;
}());
var berlinCity = new City('Berlin', 2000000, new Country('Germany', 80000000));
var jQuery;
jQuery = function (s) {
    return null;
};
var element = jQuery('.content');
var myArray;
myArray = ["Bob", "Fred"];
var dicArray;
var value = dicArray['1'];
var Clock = (function () {
    function Clock(h, m) {
    }
    return Clock;
}());

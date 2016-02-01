var Seasons;
(function (Seasons) {
    Seasons[Seasons["Winter"] = 0] = "Winter";
    Seasons[Seasons["Spring"] = 1] = "Spring";
    Seasons[Seasons["Summer"] = 2] = "Summer";
    Seasons[Seasons["Autumn"] = 3] = "Autumn";
})(Seasons || (Seasons = {}));
;
var currentSeason = Seasons.Winter; //0
var Appearance;
(function (Appearance) {
    Appearance[Appearance["AsGoodAsNew"] = 1] = "AsGoodAsNew";
    Appearance[Appearance["VeryGood"] = 2] = "VeryGood";
    Appearance[Appearance["Good"] = 3] = "Good";
    Appearance[Appearance["Bad"] = 4] = "Bad";
})(Appearance || (Appearance = {}));
;
var appearance = Appearance.AsGoodAsNew; //1
var appearanceString = Appearance[1]; //AsGoodAsNew

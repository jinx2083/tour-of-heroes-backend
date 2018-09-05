
var heroes = [];
var primaryKey = 1;

exports.getAll = function () {
    return heroes;
};

//creates a hero
exports.create = function (name) {

    var hero = {
        id: primaryKey,
        name: name
    };

    primaryKey++;

    heroes.push(hero);

    return hero;
};

//updates a hero's name
exports.update = function (id, name) {
    var index = heroes.findIndex(h => h.id == id);

    if(index === undefined || index === null || index < 0) {
        return null;
    }

    heroes[index].name = name;

    return heroes[index];
};

//gets a hero by id
exports.getHeroById = function (id) {

    var index = heroes.findIndex(h => h.id == id);

    if(index === undefined || index === null || index < 0) {
        return null;
    }

    return heroes[index];
};

//gets heroes by name
exports.getHeroesByName = function (name) {

    return heroes.filter(h => h.name == name);

};

//deletes a hero by id
exports.delete = function (id) {

    var index = heroes.findIndex(h => h.id == id);

    if(index == undefined || index == null || index < 0) {
        return null;
    }

    heroes.splice(index, 1);

};

//deletes all heroes
exports.deleteAll = function() {

    heroes = [];
};


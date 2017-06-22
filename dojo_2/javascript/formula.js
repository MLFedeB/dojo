module.exports = Formula;

var Identity = require('./identity');
var Summatory = require('./summatory');

var CellAddress = require('./cellAddress');
var Range = require('./range');

String.prototype.asFormula = function() {
    var reg=/=(.*)\((.*)\)/g;
    var parsed = reg.exec(this);

    return new Formula( 
        parsed[1], 
        parsed[2].asCellAddress() || parsed[2].asCellRange()
    );
};

function Formula(name, cellAddresses) {
    this.cellAddresses = cellAddresses;
    this.name = name;
};

Formula.prototype.getFunction = function(cells) {
    var nameToFunction = {
        "id": Identity,
        "summatory": Summatory
    };

    var FunctionConstructor = nameToFunction[this.name];

    return new FunctionConstructor(this.cellAddresses, cells);
}

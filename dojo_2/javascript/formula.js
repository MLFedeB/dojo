module.exports = Formula;

var Identity = require('./identity');

String.prototype.asFormula = function() {
    var reg=/=(.*)\((.*)\)/g;
    var parsed = reg.exec(this);

    return new Formula( parsed[1], parsed[2].asCellAddress() );
};

function Formula(name, cellAddress) {
    this.cellAddress = cellAddress;
    this.name = name;
};

Formula.prototype.getFunction = function(cells) {
    var nameToFunction = {
        "id": Identity
    };

    var FunctionConstructor = nameToFunction[this.name];

    return new FunctionConstructor(this.cellAddress, cells);
}

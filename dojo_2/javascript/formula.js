module.exports = Formula;

String.prototype.asFormula = function asFormula() {
    var nameEnding = this.indexOf("(");
    var argsEnding = this.indexOf(")");

    var formulaName = this.slice(0,nameEnding);
    var args  = this.slice(nameEnding + 1, argsEnding);
    var cellsAddress = args.asCellAddresses();

    return new Formula(formulaName, cellsAddress );
};

function Formula(name, cells) {
    this._name = name;
    this._cells = cells;
};

Formula.prototype.name = function name() {
    return this._name;
};

Formula.prototype.cells = function cells() {
    return this._cells;
};


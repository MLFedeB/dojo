var Formula = require('./formula');

module.exports = Summatory;

String.prototype.asSummatory = function asSummatory(cells) {
    var f = this.asFormula();
    var fCellAddresses = f.cells();
    var summatoryCells = fCellAddresses.map( ca => cells.find( c => c.isAddressedBy(ca) ) );
    return new Summatory(summatoryCells, cells);
};

function Summatory(cells) {
    this._cells = cells;
};

Summatory.prototype.value = function value() {
    var result = this._cells[0].value();
    var remains = this._cells.slice(1);

    remains.forEach( c => result += c.value() );
    return result;
}



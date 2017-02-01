var Formula = require('./formula');

module.exports = IdFormula;

String.prototype.asIdFormula = function asIdFormula(cells) {
    var f = this.asFormula();
    var cellAddress = f.cells()[0];
    return new IdFormula(
        cells.findIfNotError( cell => cell.isAddressedBy(cellAddress) )
    );
};

function IdFormula(cell) {
    this.cell = cell;
};

IdFormula.prototype.value = function value() {
    return this.cell.value();
}



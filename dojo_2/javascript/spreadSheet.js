const _ = require('lodash');

var cells;

var SpreadSheet = function SpreadSheet() {
    this.cells = {};
};

SpreadSheet.prototype.set = function(ref, cell) {
    this.cells[ref] = cell;
};

SpreadSheet.prototype.setFormula = function(ref, cell) {
    this.cells[ref] = cell;
};

SpreadSheet.prototype.get = function(ref) {
    return this.cells[ref];
};

SpreadSheet.prototype.getValue = function(ref) {
    return this.get(ref).getValue(this);
};

module.exports = SpreadSheet;
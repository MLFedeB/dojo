/**
 * Created by fbazan on 2/2/17.
 */
var id;
var value;
var references = [];

var FunctionCell = function FunctionCell(newValue, newCells) {
    this.value = newValue;
    this.cells = newCells || [];
};

FunctionCell.prototype.setValue = function (newValue, newCells) {
    this.value = newValue;
    this.cells = newCells;
};

// TODO: Deberia estar en otro lado, para tener distintas functions
function identity(values) { return values[0]; }

FunctionCell.prototype.getValue = function() {
    var values = [];
    this.cells.forEach(function(cell) {
        values.push(cell.getValue());
    });
    return identity(values);
};

module.exports = FunctionCell;
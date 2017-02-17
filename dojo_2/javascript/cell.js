/**
 * Created by fbazan on 2/2/17.
 */
var id;
var value;

var Cell = function Cell(value) {
    this.value = value;
};

Cell.prototype.setValue = function (newValue) {
    this.value = newValue;
};

Cell.prototype.getValue = function() {
    return this.value;
};

module.exports = Cell;
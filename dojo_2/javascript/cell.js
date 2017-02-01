require("./cellAddress");

module.exports = Cell;

function Cell(cellAddress) {
    this.cellAddress = cellAddress;
};

Cell.prototype.setValue = function value(value) {
    this.v = value;
};

Cell.prototype.isAddressedBy = function isAddressedBy(cellAddress) {
    return this.cellAddress.isEqual(cellAddress);
};

Cell.prototype.value = function value() {
    return this.v.value();
};


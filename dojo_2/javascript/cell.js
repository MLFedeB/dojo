module.exports = Cell;

function Cell(cellAddress, content) {
    this.cellAddress = cellAddress;
    this.content = content;
};

Cell.prototype.isAddressedBy = function(cellAddress) {
    return this.cellAddress.isEqual(cellAddress);
};

Cell.prototype.getContent = function() {
    return this.content.value();
};

Cell.prototype.setContent = function(content) {
    return this.content = content;
};

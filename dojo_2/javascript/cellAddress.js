module.exports = CellAddress;

String.prototype.asCellAddress = function asCellAddress() {
    var column = this.slice(0,1);
    var row = this.slice(1);

    return new CellAddress(column, row);
};

function CellAddress(column, row) {
    this.column = column;
    this.row = Number.parseInt(row);
};

CellAddress.prototype.isEqual = function isEqual(other) {
    return this.column === other.column && this.row === other.row;
};


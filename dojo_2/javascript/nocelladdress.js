module.exports = CellAddress;

String.prototype.asCellAddress = function asCellAddress() {
    // [a-zA-Z]+[0-9]+
    var reg=/^([a-zA-Z]+)([0-9]+)$/g
    var parsed = reg.exec(this);
    parsed = parsed && parsed.slice(1);

    // there is not a cell
    if ( !parsed || parsed.length < 2) {
        return null;
    };

    return new CellAddress(
        parsed[0] /* column */, 
        parsed[1] /* row    */
    );
};

function CellAddress(column, row) {
    this.column = column;
    this.row = Number.parseInt(row);
};

CellAddress.prototype.isEqual = function isEqual(other) {
    return this.column === other.column && this.row === other.row;
};


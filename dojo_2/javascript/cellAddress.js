module.exports = CellAddress;

const Range = require('./range');

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

CellAddress.prototype.formHorizontalRange = function( otherCellAddress ) {
    return Math.abs( this.row - otherCellAddress.row ) === 0;
};

CellAddress.prototype.formVerticalRange = function( otherCellAddress ) {
    return Math.abs( this.column.charCodeAt(0) - otherCellAddress.column.charCodeAt(0) ) === 0;
};

CellAddress.prototype.hSucc = function() {
    return new CellAddress( 
        String.fromCharCode( this.column.charCodeAt(0) + 1),
        this.row
    );
};

CellAddress.prototype.vSucc = function() {
    return new CellAddress( 
        this.column,
        this.row + 1
    );
};

/** 
 * Returns a range
 *
 * @return {Range}
 */
CellAddress.prototype.to = function( otherCellAddress ) {
    return new Range(this, otherCellAddress);
};


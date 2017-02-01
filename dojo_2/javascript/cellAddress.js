module.exports = CellAddress;

String.prototype.asCellAddresses = function asCellAddress() {
    if ( this.indexOf(":") === -1 ) {
        return [ this.asCellAddress() ];
    }
    var cellAddresses = this.split(":").map( ca => ca.asCellAddress() );

    var beginning = cellAddresses[0];
    var end = cellAddresses[1];
    
    return beginning.to( end );
};

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
    other = other || {};
    return this.column === other.column && this.row === other.row;
};

CellAddress.prototype.to = function to(other) {
    var result = [];

    if ( this.isVertical(other) ) {
        for(var i = this.row; i <= other.row; ++i) {
            result.push( new CellAddress(this.column, i) );
        };
    } else if ( this.isHorizontal(other) ) {
        for(var i = this.row; i <= other.row; ++i) {
            result.push( new CellAddress(this.column, i) );
        };
    } else {
        throw new Error();
    }

    return result;
};

CellAddress.prototype.isVertical = function(other) {
    return this.column === other.column ;
};

CellAddress.prototype.isHorizontal = function(other) {
    return this.row  === other.row ;
};

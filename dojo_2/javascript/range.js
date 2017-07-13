var CellAddress = require('./cellAddress');

String.prototype.asCellRange = function asRange() {
    // [a-zA-Z]+[0-9]+
    var reg=/^([a-zA-Z]+[0-9]+):([a-zA-Z]+[0-9]+)$/g
    var parsed = reg.exec(this);
    parsed = parsed.slice(1);

    if ( !parsed || parsed.length < 2) {
        return null;
    }

    var cellAddressFrom = parsed[0].asCellAddress();
    var cellAddressTo = parsed[1].asCellAddress();

    return new Range(cellAddressFrom, cellAddressTo);
};

function Range(cellAddressFrom, cellAddressTo) {
    this.cellAddresses = [];

    if ( cellAddressFrom.formHorizontalRange( cellAddressTo ) ) {
        this.hPopulate(cellAddressFrom, cellAddressTo);
        return;
    }

    if ( cellAddressFrom.formVerticalRange( cellAddressTo ) ) {
        this.vPopulate(cellAddressFrom, cellAddressTo);
        return;
    }

    throw new Error();
};

Range.prototype.hPopulate = function (from, to) {
    var next = from;
    this.cellAddresses = [from];

    while ( !next.isEqual(to)  ) {
        next = next.hSucc();
        this.cellAddresses.push( next.hSucc() );
    }

    this.cellAddresses.push( to );
};

Range.prototype.vPopulate = function (from, to) {
    var next = from;
    this.cellAddresses = [from];

    while ( !next.isEqual(to)  ) {
        next = next.vSucc();
        this.cellAddresses.push( next );
    }
    this.cellAddresses.push( to );
};

Range.prototype.isAdrressByAny = function ( cell ) {
    return this.cellAddresses.some( cellAddress => 
        cell.isAddressedBy( cellAddress ) 
    );
};

Range.prototype.contains = function ( cellAddressToBeFound ) {
    var found = this.cellAddresses.find( cellAddress => 
        cellAddress.isEqual( cellAddressToBeFound ) 
    );
    return !!found;
};

Range.prototype.cells = function( cells ) {
    return cells.filter( c => this.isAdrressByAny(c) );
};

module.exports = Range;

module.exports = SpreadSheet;

var CellAddress = require('./cellAddress');
var Cell = require('./cell');
var Value = require('./value');
var Label = require('./label');
var Formula = require('./formula');

function SpreadSheet() {
    this.cells = [];
};

SpreadSheet.prototype.setValue = function(cellAddressStr, value) {
    var value = new Value(value);
    var cellAddress = cellAddressStr.asCellAddress()
    var cell;

    try {
        cell = this.findCellIfAbsentError(cellAddress, Error);
    } catch (error) {
        cell = new Cell(cellAddress, value);
        this.cells.push(cell);
    }

    cell.setContent(value);
}

SpreadSheet.prototype.setLabel = function(cellAddressStr, labelValue) {
    var value = new Label(labelValue);
    var cellAddress = cellAddressStr.asCellAddress()
    var cell;

    try {
        cell = this.findCellIfAbsentError(cellAddress, Error);
    } catch (error) {
        cell = new Cell(cellAddress, value);
        this.cells.push(cell);
    }

    cell.setContent(value);
}

SpreadSheet.prototype.setIdentity = function(cellAddressStr, formulaStr) {
    var cellAddress = cellAddressStr.asCellAddress()
    var formula = formulaStr.asFormula();
    var cell = this.findCellIfAbsentDefault(cellAddress, 
        new Cell(cellAddress, formula.getFunction(this.cells) )
    );
    this.cells.push(cell);
}


SpreadSheet.prototype.get = function(cellAddressStr) {
    var cell = this.findCellIfAbsentError(cellAddressStr.asCellAddress(), Error);
    return cell.getContent();
}

SpreadSheet.prototype.findCellIfAbsentDefault = function(cellAdddress, cell) {
    var result = this.cells.find( c => c.isAddressedBy(cellAdddress) );
    return result || cell;
}

SpreadSheet.prototype.findCellIfAbsentError = function(cellAdddress, ErrorClass) {
    var cell = this.cells.find( c => c.isAddressedBy(cellAdddress) );

    if ( !cell ) {
        throw new ErrorClass();
    }

    return cell;
}

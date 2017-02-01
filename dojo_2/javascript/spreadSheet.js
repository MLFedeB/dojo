require("./arrayImproved");
var CellAddress = require("./cellAddress");
var Cell = require("./cell");
var IdFormula = require("./idFormula");
var SummatoryFormula = require("./summatoryFormula");
var Label = require("./label");
var Value = require("./value");

module.exports = SpreadSheet;

function SpreadSheet() {
    this._cells = [];
};

SpreadSheet.prototype.setLabel = function(cell, label) {
    this.set(cell, new Label(label) );
};

SpreadSheet.prototype.setValue = function(cell, value) {
    this.set(cell, new Value(value) );
};

SpreadSheet.prototype.setFormula = function(cell, formula) {
    var f = formula.asFormula();
    var creators = {
        "id": "asIdFormula",
        "summatory": "asSummatory"
    };
    var worker = creators[f.name()];

    this.set(cell, formula[worker](this._cells) );
};

/***
 * Set the value of the cell
 *
 * @param   {String}    cellAddress
 * @param   {Object}    value  
 *
 ***/
SpreadSheet.prototype.set = function set(cell, value) {
    var cellAddress = cell.asCellAddress();
    var cell;
    
    try {
        cell = this.getCell( cellAddress );
    } catch (e) {
        cell = new Cell(cellAddress);
        this._cells.push( cell );
    };

    cell.setValue(value);
}

/**
 *
 * Gets a cell if doesn't exists throw error
 *
 * @param   {String}    cellAddress
 *
 * @return {Cell}
 */
SpreadSheet.prototype.get = function get(cellAddress) {
    var cell = this._cells.findIfNotError( cell => cell.isAddressedBy( cellAddress.asCellAddress() ) );
    return cell.value();
}

/**
 *
 * Gets a cell if doesn't exists throw error
 *
 * @param   {CellAddress}    cellAddress
 *
 * @return {Cell}
 */
SpreadSheet.prototype.getCell = function getCell(cellAddress) {
    return this._cells.findIfNotError( c => c.isAddressedBy(cellAddress) );
}


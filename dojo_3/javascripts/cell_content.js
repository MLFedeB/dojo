/**
 * Created by fbazan on 3/3/17.
 */


module.exports = CellContent;

function CellContent(_cell) {
    this.stepIn(_cell);
}

CellContent.prototype.stepIn = function stepIn(_cell) {
    _cell.addIfFree(this);
};

CellContent.prototype.isIn = function isIn(_cell) {
    return this.cell && this.cell.areEqual(_cell);
};

CellContent.prototype.residesIn = function residesIn(newCell) {
    if (this.cell) { // step out
        this.cell.free();
    }
    this.cell = newCell;
};

CellContent.prototype.bumpsInto = function bumpsInto(_cellContent) {
    console.log('Choque contra ' + _cellContent);
};
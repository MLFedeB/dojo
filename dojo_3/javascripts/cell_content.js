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

CellContent.prototype.updateCell = function updateCell(_cell) {
    if (this.cell) {
        this.cell.free();
    }
    this.cell = _cell;
};
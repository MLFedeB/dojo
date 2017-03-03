/**
 * Created by fbazan on 3/3/17.
 */

module.exports = Cell;

function Cell(_x, _y) {
    this.x = _x;
    this.y = _y;
}

Cell.prototype.getX = function getX() {
    return this.x;
};

Cell.prototype.getY = function getY() {
    return this.y;
};

Cell.prototype.areEqual = function areEqual(_cell) {
    return (this.x === _cell.getX()) && (this.y === _cell.getY());
};

Cell.prototype.addIfFree = function addIfFree(o) {
    if (!this.content) {
        this.content = o;
        this.content.updateCell(this);
    }
}

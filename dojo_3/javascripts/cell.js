/**
 * Created by fbazan on 3/3/17.
 */

module.exports = Cell;

function Cell(_x, _y) {
    this.x = _x;
    this.y = _y;
}

Cell.prototype.areEqual = function areEqual(x, y) {
    return (this.x === x) && (this.y === y);
};

Cell.prototype.addIfFree = function addIfFree(o) {
    if (!this.content) {
        this.content = o;
        this.content.updateCell(this);
    }
}

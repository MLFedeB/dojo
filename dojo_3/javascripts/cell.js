/**
 * Created by fbazan on 3/3/17.
 */

module.exports = Cell;

function Cell(_x, _y) {
    this.x = _x;
    this.y = _y;
}

Cell.prototype.areEqual = function areEqual(_cell) {
    return (this.x === _cell.x) && (this.y === _cell.y);
};

Cell.prototype.addIfFree = function addIfFree(newContent) {
    if (this.isFree()) {
        this.content = newContent;
        this.content.residesIn(this);
    } else {
        newContent.bumpsInto(this.content);
        throw "Busy cell";
    }
}

Cell.prototype.isFree = function isFree() {
    return !this.content;
}

Cell.prototype.free = function() {
    this.content = undefined;
}

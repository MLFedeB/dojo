/**
 * Created by fbazan on 3/3/17.
 */

module.exports = Bomberman;

function Bomberman(_cell) {
    this.stepIn(_cell);
}

Bomberman.prototype.stepIn = function stepIn(_cell) {
    _cell.addIfFree(this);
};

Bomberman.prototype.isIn = function isIn(_cell) {
    return this.cell && this.cell.areEqual(_cell.x, _cell.y);
};

Bomberman.prototype.updateCell = function updateCell(_cell) {
    this.cell = _cell;
}
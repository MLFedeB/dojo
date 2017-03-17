/**
 * Created by fbazan on 3/3/17.
 */

var util = require('util');
var CellContent = require('./cell_content');
var Enemy = require('./enemy');
module.exports = Bomberman;

function Bomberman(_cell) {
    this.status = 'alive';
    CellContent.call(this, _cell);
}
util.inherits(Bomberman, CellContent);

Bomberman.prototype.bumpsInto = function bumpsInto(content) {
    if (content instanceof Enemy) {
        this.status = 'died';
    }
};
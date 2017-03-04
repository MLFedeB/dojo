/**
 * Created by fbazan on 3/3/17.
 */

var util = require('util');
var CellContent = require('./cell_content');

module.exports = Enemy;

function Enemy(_cell) {
    CellContent.call(this, _cell);
}
util.inherits(Enemy, CellContent);


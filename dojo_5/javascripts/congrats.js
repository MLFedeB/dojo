/**
 * Created by fbazan on 16/5/17.
 */

const Header = require('./header');

module.exports = Congrats;

function Congrats(order) {
    this._order = order;
    this._header = new Header(this._order.getPayment(), this._order.getShipping());
}

Congrats.prototype.asJSON = function() {
    return this._header.asJSON();
}
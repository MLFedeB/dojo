const Header = require('./header.js');

function Congrats(_order) {
    this.header = new Header(
        _order.getPayment(),
        _order.getShipping()
    );
};

Congrats.prototype.asJSON = function() {
    return this.header.asJSON();;
};

module.exports = Congrats;

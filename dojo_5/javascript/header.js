function Header(_payment, _shipping) {
    this.payment = _payment;
    this.shipping = _shipping;
};

Header.prototype.asJSON = function() {
    var winner = this.payment.challenges( this.shipping );
    return winner.asJSON();
};

module.exports = Header;

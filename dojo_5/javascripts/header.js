/**
 * Created by fbazan on 16/5/17.
 */

module.exports = Header;

function Header(payment, shipping) {
    this._payment = payment;
    this._shipping = shipping;
}

Header.prototype.asJSON = function asJSON() {
    var headerModel = this._payment.getHeaderModel() || this._shipping.getHeaderModel();

    return {
        "status": "success",
        "substatus": null,
        "heading": headerModel.heading,
        "title": headerModel.title
    };
};
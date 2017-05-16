/**
 * Created by fbazan on 16/5/17.
 */
const Payment = require('./payment');
const Shipping = require('./shipping');

module.exports = Order;

function Order(orderResponse) {
    this._orderResponse = orderResponse;

    this._payment = new Payment(this._orderResponse.payments[0]);
    this._shipping = new Shipping(this._orderResponse.shipping);
}

Order.prototype.getPayment = function getPayment() {
    return this._payment;
};

Order.prototype.getShipping = function getShipping() {
    return this._shipping;
};

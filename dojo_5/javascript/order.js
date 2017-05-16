const Payments = require('./payments');
const Shipping = require('./shippings');

function Order(_order) {
    this.orderFromApi = _order;
};

Order.prototype.paymentBasedOnType = function(paymentFromApi) {
    var Constructor = Payments.constructorBasedOnType(paymentFromApi);
    return new Constructor(this.orderFromApi);
}

Order.prototype.shippingBasedOnType = function(shippingFromApi) {
    var Constructor = Shipping.constructorBasedOnType(shippingFromApi);
    return new Constructor(shippingFromApi, this.orderFromApi);
}

Order.prototype.getPayment = function() {
    var payment = this.orderFromApi.payments[0];
    return this.paymentBasedOnType(payment);
}

Order.prototype.getShipping = function() {
    var shippingFromApi = this.orderFromApi.shipping;
    return this.shippingBasedOnType(shippingFromApi);
}

module.exports = Order;

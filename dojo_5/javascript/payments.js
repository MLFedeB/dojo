const Efecty = require('./efecty');
const Visa = require('./visa');

var Payments = {};

Payments.constructorBasedOnType = function(payment) {
    var paymentMethod = {
        "efecty": Efecty,
        "visa": Visa
    };

    return paymentMethod[payment.payment_method_id];
}

module.exports = Payments;

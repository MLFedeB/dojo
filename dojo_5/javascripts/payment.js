/**
 * Created by fbazan on 16/5/17.
 */
const _ = require('lodash');

module.exports = Payment;

var headerByPaymentMethodAndType = {
    pending: {
        ticket: {
            efecty: {
                "heading": "¡Apúrate a pagar!",
                "title": "Paga ${price} en ${paymentMethodName} para reservar tu compra"
            }
        }
    }
};

function Payment(paymentResponse) {
    this._paymentResponse = paymentResponse;
}

Payment.prototype.getHeaderModel = function getHeaderModel() {
    return _.get(headerByPaymentMethodAndType,
        [this._paymentResponse.status,
            this._paymentResponse.payment_type,
            this._paymentResponse.payment_method_id]
    );
};
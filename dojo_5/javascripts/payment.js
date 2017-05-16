/**
 * Created by fbazan on 16/5/17.
 */
const _ = require('lodash');
module.exports = Payment;

var headerByPaymentMethodAndType = {
    ticket: {
        default: {},
        efecty: {
            "heading": "¡Apúrate a pagar!",
            "title": "Paga ${price} en ${paymentMethodName} para reservar tu compra"
        }
    },
    credit_card: {
        default: {
            "heading": "¡Tu pago está aprobado!",
            "title": "Coordina con el vendedor el envío"
        }
    },
    default: {}
};

function Payment(paymentResponse) {
    this._paymentResponse = paymentResponse;
}

Payment.prototype.getHeaderModel = function getHeaderModel() {
    return _.get(headerByPaymentMethodAndType,
        [this._paymentResponse.payment_type, this._paymentResponse.payment_method_id],
        _.get(headerByPaymentMethodAndType,
            [this._paymentResponse.payment_type, 'default'],
            headerByPaymentMethodAndType.default
        )
    );
};
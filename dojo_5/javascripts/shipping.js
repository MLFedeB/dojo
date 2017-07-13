/**
 * Created by fbazan on 16/5/17.
 */
const _ = require('lodash');

module.exports = Shipping;

var headerByShippingMode = {
    custom: {
        "heading": "¡Tu pago está aprobado!",
        "title": "Coordina con el vendedor el envío"
    },
    me2: {
        "heading": "¡Excelente compra!",
        "title": "El jueves 2017-05-18T00:00:00.000-05:00. te llegará el producto"
    }
};

function Shipping(shippingResponse) {
    this._shippingResponse = shippingResponse;
}

Shipping.prototype.getHeaderModel = function getHeaderModel() {
    return _.get(headerByShippingMode, [this._shippingResponse.shipping_mode]);
};
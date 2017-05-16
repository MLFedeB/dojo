const _ = require('lodash');

function MercadoEnvio(_fromApi, _order) {
    this.fromApi = _fromApi;
};

MercadoEnvio.prototype.challengesByVisa = function( aVisa ) {
    return this;
};

MercadoEnvio.prototype.asJSON = function() {
    var deliveryTime = _.get(this.fromApi, "shipping_option.estimated_delivery_time.date", "unknown");
    return {
        "status": "success",
        "substatus": null,
        "heading": "¡Excelente compra!",
        "title": `El jueves ${deliveryTime}. te llegará el producto`,
    };
};

module.exports = MercadoEnvio;

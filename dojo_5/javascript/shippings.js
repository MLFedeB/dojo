const MercadoEnvio = require('./mercadoenvio');
const Custom = require('./custom');

var Shippings = {};

Shippings.constructorBasedOnType = function(shippingFromApi) {
    var shippingMethod = {
        "me2": MercadoEnvio,
        "custom": Custom
    };

    return shippingMethod[shippingFromApi.mode];
}

module.exports = Shippings;

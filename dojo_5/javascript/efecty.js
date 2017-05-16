function Efecty(_order) {
};

/***
 * It defines which one (payment or shipping) will render header json object
 *
 **/
Efecty.prototype.challenges = function( aShipping ) {
    return this;
};


Efecty.prototype.asJSON = function() {
    return {
        "status": "success",
        "substatus": null,
        "heading": "¡Apúrate a pagar!",
        "title": "Paga ${price} en ${paymentMethodName} para reservar tu compra",
    };
};

module.exports = Efecty;

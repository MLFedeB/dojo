function Visa(_order) {
};

/***
 * It defines which one (payment or shipping) will render header json object
 *
 **/
Visa.prototype.challenges = function( aShipping ) {
    return aShipping.challengesByVisa(this);
};

Visa.prototype.asJSON = function() {
    return {
        "status": "success",
        "substatus": null,
        "heading": "¡Tu pago está aprobado!",
        "title": "Coordina con el vendedor el envío",
    };
};

module.exports = Visa;

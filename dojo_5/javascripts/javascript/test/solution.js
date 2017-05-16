const chai = require('chai');

const Congrats = require('../congrats');
const Order = require('../order');

describe("congrats", () => {
    describe("B = P", function() {
        it("should get rendered congrats for Efecty", () => {

            // chai.assert.deepEqual( congrats.asJSON(), {
            //     "status": "success",
            //     "substatus": null,
            //     "heading": "¡Apúrate a pagar!",
            //     "title": "Paga ${price} en ${paymentMethodName} para reservar tu compra",
            // });
        });

        it("should render congrats for orders paid by credit cards shipped customly", () => {

            // chai.assert.deepEqual( congrats.asJSON(), {
            //     "status": "success",
            //     "substatus": null,
            //     "heading": "¡Tu pago está aprobado!",
            //     "title": "Coordina con el vendedor el envío",
            // });
        });

        it("should render congrats for orders paid by credit cards shipped customly", () => {

            // chai.assert.deepEqual( congrats.asJSON(), {
            //     "status": "success",
            //     "substatus": null,
            //     "heading": "¡Excelente compra!",
            //     "title": "El jueves 2017-05-18T00:00:00.000-05:00. te llegará el producto",
            // });
        });

    });

});

function orders() {
	return {
		efectyBuyEqualPay:                          require('./params/efectyBuyEqualPay.json'),
        creditCardBuyEqualPayWithCustomShipping:    require('./params/creditCardBuyEqualPayWithCustomShipping.json'),
        creditCardByEqualPayShippedByME:            require('./params/creditCardByEqualPayShippedByME.json') 
	}
};

const chai = require('chai');
const SpreadSheet = require('../spreadSheet.js');

var sheet;

describe("solution", () => {
    beforeEach(() => {
        sheet = new SpreadSheet();
    });

    describe("sheet", () => {
        describe("cells", () => {
            it("should populate two cells with numeric values and response the stored values", () => {
                sheet.setValue("a1", 1);
                sheet.setValue("a2", 2);

                chai.expect( sheet.get("a1") )
                    .to.be.eql(1);
                chai.expect( sheet.get("a2") )
                    .to.be.eql(2);
            });

            it("should polulate cells with a label and a value and response the stored values", () => {

                sheet.setLabel("a1", "Valor:");
                sheet.setValue("a2", 2);

                chai.expect( sheet.get("a1") )
                    .to.be.eql("Valor:");
                chai.expect( sheet.get("a2") )
                    .to.be.eql(2);
            });

            it("should store values and update values references", () => {

                sheet.setValue("a1", 1);
                sheet.setIdentity("a2", "=id(a1)")

                chai.expect( sheet.get("a1") )
                    .to.be.eql(1);
                chai.expect( sheet.get("a2") )
                    .to.be.eql(1);

                sheet.setValue("a1", 2);

                chai.expect( sheet.get("a1") )
                    .to.be.eql(2);
                chai.expect( sheet.get("a2") )
                    .to.be.eql(2);

            });

            it("should throw error because cell doesn't exist", () => {

                chai.assert.throws( () => {
                    sheet.get("a1");
                });
            });

            it("should response summatory", () => {

                sheet.setValue("a1", 1);
                sheet.setValue("a2", 2);
                sheet.setIdentity("a3", "=summatory(a1:a2)")

                chai.expect( sheet.get("a3") )
                    .to.be.eql(3);

                sheet.setValue("a2", 9);

                chai.expect(10)
                    .to.be.eql( sheet.get("a3") );
            });

            it.skip("should response summatory - broken range", () => {

                // ... 
                // Code here!
                // ... 

                chai.expect( sheet.get("a3") )
                    .to.be.eql(3);
                sheet.set("a2", 9);
                chai.expect( sheet.get("a3") )
                    .to.be.eql(10);
            });
        });
    });

});

const chai = require('chai');
const SpreadSheet = require('../spreadSheet.js');
const Cell = require('../cell');
const FunctionCell = require('../function_cell');
const identity = require('../identity');
var sheet;

describe("solution", () => {
    beforeEach(() => {
        sheet = new SpreadSheet();
    });

    describe("sheet", () => {
        describe("cells", () => {
            it("should populate two cells with numeric values and response the stored values", () => {

                // ... 
                // Code here!
                // ...
                sheet.set('a1', new Cell(1));
                sheet.set('a2', new Cell(2));

                chai.expect( sheet.get('a1').getValue() )
                    .to.be.eql(1);
                chai.expect( sheet.get("a2").getValue() )
                    .to.be.eql(2);
            });

            it("should polulate cells with a label and a value and response the stored values", () => {

                // ... 
                // Code here!
                // ...
                sheet.set('a1', new Cell('Valor:'));
                sheet.set('a2', new Cell(2));

                chai.expect( sheet.get("a1").getValue() )
                    .to.be.eql("Valor:");
                chai.expect( sheet.getValue("a2"))
                    .to.be.eql(2);
            });

            it("should store values and update values references", () => {

                // ... 
                // Code here!
                // ...
                sheet.set('a1', new Cell(1));
                sheet.set('a2', new FunctionCell(undefined,[sheet.get('a1')]));

                chai.expect( sheet.get("a1").getValue(sheet) )
                    .to.be.equal(1);
                chai.expect( sheet.get("a2").getValue(sheet) )
                    .to.be.equal(1);
            });

            it.skip("should response summatory", () => {

                // ... 
                // Code here!
                // ... 

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

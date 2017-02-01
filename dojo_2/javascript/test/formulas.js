const chai = require('chai');
const Formulas = require('../formula');
const CellAddress = require('../cellAddress');

var sheet;

describe("Formulas", () => {
    describe("parse function and cell", () => {
        it("should return a populate formula object", () => {
            var formula = "id(a1)".asFormula();
            var cells = formula.cells();

            chai.expect( formula.name() ).to.be.eql("id");
            chai.expect( cells[0].isEqual( new CellAddress("a", 1) ) ).to.be.true;

        });
    });

    describe("parse function and range of cells", () => {
        it("should return a populate formula object", () => {
            var formula = "summatory(a1:a3)".asFormula();
            var cells = formula.cells();

            chai.expect( formula.name() ).to.be.eql("summatory");
            chai.expect( cells[0].isEqual( new CellAddress("a", 1) ) ).to.be.true;
            chai.expect( cells[1].isEqual( new CellAddress("a", 2) ) ).to.be.true;
            chai.expect( cells[2].isEqual( new CellAddress("a", 3) ) ).to.be.true;

        });
    });


});


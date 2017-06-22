const chai = require('chai');
const CellAddress = require('../cellAddress');

var sheet;

describe("Intervals", () => {
    describe("succ", () => {

        it("should return h successor", () => {
            var a1 = new CellAddress("a", 1);
            var b1 = a1.hSucc();

            chai.expect( b1.isEqual( new CellAddress("b", 1) ) ).to.be.true;
        });

        it("should return v successor", () => {
            var a1 = "a1".asCellAddress();
            var a2 = a1.vSucc();

            chai.expect( a2.isEqual( "a2".asCellAddress() ) ).to.be.true;
        });
    });

    describe("vertical range", () => {
        it("should return a list of cellAddress", () => {
            var a1 = new CellAddress("a", 1);
            var a9 = new CellAddress("a", 9);
            var range = a1.to( a9 );

            chai.expect( range.contains( new CellAddress("a", 1) ) ).to.be.true;
            chai.expect( range.contains( new CellAddress("a", 9) ) ).to.be.true;
            chai.expect( range.contains( new CellAddress("a", 19) ) ).to.be.false;
        });
    });

    describe("horizontal range", () => {
        it("should return a list of cellAddress", () => {
            var a1 = new CellAddress("a", 1);
            var a9 = new CellAddress("z", 1);
            var range = a1.to( a9 );

            chai.expect( range.contains( new CellAddress("a", 1) ) ).to.be.true;
            chai.expect( range.contains( new CellAddress("g", 1) ) ).to.be.true;
            chai.expect( range.contains( new CellAddress("z", 1) ) ).to.be.true;
            chai.expect( range.contains( new CellAddress("z", 2) ) ).to.be.false;
        });
    });

    describe("neighter horizontal nor vertical range", () => {
        it("should return a list of cellAddress", () => {
            var a1 = new CellAddress("a", 1);
            var a9 = new CellAddress("c", 2);

            chai.assert.throws( () => {
                var range = a1.to( a9 );
            });
        });
    });

});


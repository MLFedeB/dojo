const chai = require('chai');
const SpreadSheet = require('../cellAddress');

var sheet;

describe("Intervals", () => {
    describe("vertical range", () => {
        it("should return a list of cellAddress", () => {
            var cellAddressFrom = "a1".asCellAddress();
            var cellAddressTo = "a9".asCellAddress();
            var range = cellAddressFrom.to( cellAddressTo );

            chai.expect( range[0].isEqual( "a1".asCellAddress() ) ).to.be.true;
            chai.expect( range[1].isEqual( "a2".asCellAddress() ) ).to.be.true;
            chai.expect( range[2].isEqual( "a3".asCellAddress() ) ).to.be.true;
            chai.expect( range[8].isEqual( "a9".asCellAddress() ) ).to.be.true;
        });
    });

});


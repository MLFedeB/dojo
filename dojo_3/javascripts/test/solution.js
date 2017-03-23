const chai = require('chai');

const Bomber = require('../bomber');
const Cell = require('../cell');
const Something = require('../something');

describe("bomberman", () => {
    describe("bomberman", () => {
        it("steps into a cell which is empty then it moves in", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var here = new Cell();
            bomber.stepsIn( here );
            chai.assert.equal( bomber.isIn(here), true);

        });

        it("steps into a cell which is busy with an object then it doesn't move and throw an exception", () => {
            var bornPlace = new Cell();
            var bomber = new Bomber( bornPlace );
            var here = new Cell( new Something() );
            chai.assert.throws( () => {
                bomber.stepsIn( here );
            });
        });

        it.skip("steps into a cell which is busy with an enemy then it dies", () => {
        });

        it.skip("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
        });

        it.skip("throws a boom to a brick, the boom explotes and the bricks disappears", () => {
        });
    });

});

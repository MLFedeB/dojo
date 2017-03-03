const chai = require('chai');

const Bomber = require('../bomberman');
const Cell = require('../cell');

describe("bomberman", () => {
    describe("bomberman", () => {
        it("steps into a cell which is empty then it moves in", () => {
            var startCell = new Cell(0,0);
            var bomber = new Bomber(startCell);
            var nextCell = new Cell(0,1);

            bomber.stepIn(nextCell);
            chai.assert.equal(bomber.isIn(nextCell), true);
            chai.assert.equal(bomber.isIn(startCell), false);
            chai.assert(startCell.isFree(), true);
        });

        it.skip("steps into a cell which is busy with an object then it doesn't move and throw an exception", () => {
        });

        it.skip("steps into a cell which is busy with an enemy then it dies", () => {
        });

        it.skip("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
        });

        it.skip("throws a boom to a brick, the boom explotes and the bricks disappears", () => {
        });
    });

});

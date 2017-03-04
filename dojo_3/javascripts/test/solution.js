const chai = require('chai');

const Bomber = require('../bomberman');
const Cell = require('../cell');
const Enemy = require('../enemy');

describe("bomberman", () => {
    describe("bomberman", () => {
        it("steps into a cell which is empty then it moves in", () => {
            var startCell = new Cell(0,0);
            var bomber = new Bomber(startCell);
            var nextCell = new Cell(0,1);

            bomber.stepIn(nextCell);
            chai.assert.equal(bomber.isIn(nextCell), true);
            chai.assert.equal(bomber.isIn(startCell), false);
            chai.assert.equal(startCell.isFree(), true);
        });

        it("steps into a cell which is busy with an object then it doesn't move and throw an exception", () => {
            var startCell = new Cell(0,0);
            var bomber = new Bomber(startCell);
            var nextCell = new Cell(0,1);
            new Bomber(nextCell);

            var fn = function() {
                bomber.stepIn(nextCell);
            };

            chai.expect(fn).to.throw('Busy cell');
            chai.assert.equal(bomber.isIn(startCell), true);
            chai.assert.equal(bomber.isIn(nextCell), false);
            chai.assert.equal(startCell.isFree(), false);
            chai.assert.equal(nextCell.isFree(), false);
        });

        it("steps into a cell which is busy with an enemy then it dies", () => {
            var startCell = new Cell(0,0);
            var bomber = new Bomber(startCell);
            var nextCell = new Cell(0,1);
            new Enemy(nextCell);

            var fn = function() {
                bomber.stepIn(nextCell);
            };

            chai.assert.equal(bomber.status, 'alive');
            chai.expect(fn).to.throw('Busy cell');
            chai.assert.equal(bomber.isIn(startCell), true);
            chai.assert.equal(bomber.isIn(nextCell), false);
            chai.assert.equal(startCell.isFree(), false);
            chai.assert.equal(nextCell.isFree(), false);
            chai.assert.equal(bomber.status, 'died');
        });

        it.skip("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
        });

        it.skip("throws a boom to a brick, the boom explotes and the bricks disappears", () => {
        });
    });

});

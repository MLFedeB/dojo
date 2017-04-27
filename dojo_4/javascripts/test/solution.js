const chai = require('chai');

const Pacman = require('../pacman');
const Biscuit = require('../biscuit');
const Phantom = require('../phantom');
const Pellet = require('../pellet');

describe("pacman", () => {
    it("should get fat whether it eats biscuits", () => {
        var pacman = new Pacman();

        pacman.eats(new Biscuit());
        chai.assert.equal(pacman.weight(), 1);
    });

    it("should get fat whether it eats several biscuits", () => {
        var pacman = new Pacman();

        pacman.eats(new Biscuit());
        pacman.eats(new Biscuit());
        chai.assert.equal(pacman.weight(), 2);
    });

    it("should die whether bumps into phanton", () => {
        var pacman = new Pacman();
        pacman.bumpsInto(new Phantom());

        chai.assert.equal(pacman.isAlive(), false);
        chai.assert.equal(pacman.isDead(), true);
    });

    it.skip("should weaken phantom whether it eats a pellet", () => {
        var pacman = new Pacman();
        var phantom = new Phantom();

        pacman.eats(new Pellet());
        pacman.bumpsInto(phantom);

        chai.assert.equal(pacman.isAlive(), true);
    });

});

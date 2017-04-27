/**
 * Created by fbazan on 27/4/17.
 */

module.exports = Pacman;

function Pacman() {
    this._weight = 0;
    this._status = 'alive';
}

Pacman.prototype.eats = function eats(biscuit) {
    this._weight++;

};

Pacman.prototype.weight = function weight() {
    return this._weight;
};

Pacman.prototype.bumpsInto = function bumpsInto(o) {
    o.catchPacman(this);
};

Pacman.prototype.dies = function dies() {
    this._status = 'died';
}

Pacman.prototype.isAlive = function isAlive() {
    return this._status == 'alive';
};

Pacman.prototype.isDead = function isDead() {
    return !this.isAlive();
};


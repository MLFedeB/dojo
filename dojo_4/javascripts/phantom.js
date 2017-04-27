/**
 * Created by fbazan on 27/4/17.
 */

module.exports = Phantom;

function Phantom() {

}

Phantom.prototype.catchPacman = function catchPacman(pacman) {
    pacman.dies();
};

Phantom.prototype.isWeakened = function isWeakened() {

};
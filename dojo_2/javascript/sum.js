/**
 * Created by fbazan on 2/2/17.
 */
module.exports = function sum(references) {
    var total = 0;
    _.forEach(references, function(reference) {
        total += reference.get();
    });
    return total;
};

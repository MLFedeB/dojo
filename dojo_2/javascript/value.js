module.exports = Value;

function Value(v) {
    this.v = v;
};

Value.prototype.value = function value() {
    return this.v;
};



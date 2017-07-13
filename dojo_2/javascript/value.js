module.exports = Value;

function Value(_value) {
    this.v = _value;
};

Value.prototype.value = function() {
    return this.v;
};

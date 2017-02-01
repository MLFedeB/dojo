module.exports = Label;

function Label(v) {
    this.v = v;
};

Label.prototype.value = function value() {
    return this.v;
};




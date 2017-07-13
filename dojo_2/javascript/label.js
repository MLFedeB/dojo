module.exports = Label;

function Label(lableValue) {
    this.lableValue = lableValue;
};

Label.prototype.value = function() {
    return this.lableValue;
};

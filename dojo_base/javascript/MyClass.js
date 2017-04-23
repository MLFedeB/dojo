// this is de constructor
function MyClass(param0, param1) {
    this.attribute0 = param0;
    this.attribute1 = param1;
}

MyClass.prototype.isEqual = function( anotherInstance ) {
    return this.attribute0 === anotherInstance.attribute0 &&
        this.attribute1 === anotherInstance.attribute1;
};

MyClass.prototype.mustThrowException = function() {
    throw new Error();
};

module.exports = MyClass;

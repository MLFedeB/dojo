const chai = require('chai');

const MyClass = require('../MyClass');

describe("MyClass", () => {
    it("it should be both equal", () => {
        var anInstance = new MyClass();
        var anotherInstance = new MyClass();

        chai.assert.equal( anInstance.isEqual(anotherInstance), true);
    });

    it("it shoud throw execption", () => {
        var anInstance = new MyClass();
        chai.assert.throws( () => {
            anInstance.mustThrowException();
        });
    });
});

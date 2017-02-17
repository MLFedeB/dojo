var util = require('util');

function ClassA() {}

ClassA.prototype.methodFromA() {
    console.log("do methodFromA");
}

function ClassB() {}
// Extends
util.inherits(ClassB, ClassA);

ClassB.prototype.methodFromA() {
    // Overwritting
    console.log("do methodFromA called from B");
}

ClassB.prototype.methodFromB() {
    console.log("do methodFromA");
}


var instanceOfA = new ClassA();
var instanceOfB = new ClassB();

instanceOfA.methodFromA();

instanceOfB.methodFromA();
instanceOfB.methodFromB();

"use strict";

var Box = require("./box");
var Point2 = require("./point2");

module.exports = Box2;
function Box2() {
    Box.apply(this, arguments);
}

Box2.prototype = Object.create(Box.prototype);
Box2.prototype.constructor = Box2;

Box2.prototype.contains = function (box) {
    return (
        box.start.x >= this.start.x &&
        box.end.x <= this.end.x &&
        box.start.y >= this.start.y &&
        box.end.y <= this.end.y
    );
};

Box2.prototype.clone = function () {
    return new Box2(this.start.clone(), this.end.clone());
};

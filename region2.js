"use strict";

var Region = require("./region");
var Point2 = require("./point2");

module.exports = Region2;
function Region2() {
    Region.apply(this, arguments);
}

Region2.prototype = Object.create(Region.prototype);
Region2.prototype.constructor = Region2;
Region2.prototype.temp1 = new Point2();
Region2.prototype.temp2 = new Point2();

Region2.prototype.contains = function (that) {
    return (
        this.position.x <= that.position.x &&
        this.position.x + this.size.x >= that.position.x + that.size.x &&
        this.position.y <= that.position.y &&
        this.position.y + this.size.y >= that.position.y + that.size.y
    );
};

Region2.prototype.clone = function () {
    return new Region2(this.position.clone(), this.size.clone());
};


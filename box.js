"use strict";

module.exports = Box;
function Box(start, end) {
    this.start = start;
    this.end = end;
}

Box.prototype.become = function (that) {
    this.start.become(that.start);
    this.end.become(that.end);
    return this;
};

Box.prototype.copyFromRegion = function (that) {
    this.start.become(that.position);
    this.end.become(that.size).addThis(that.position);
    return this;
};

Box.prototype.copyIntoRegion = function (that) {
    that.position.become(this.start);
    that.size.become(this.end).subThis(this.start);
    return that;
};

Box.prototype.hash = function () {
    return this.start.x + "," + this.start.y + "," + this.end.x + "," + this.end.y;
};

Box.prototype.equals = function (that) {
    return that && this.start.equals(that.start) && this.end.equals(that.end);
};

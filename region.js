"use strict";

module.exports = Region;
function Region(position, size) {
    this.position = position;
    this.size = size;
}

Region.prototype.become = function (that) {
    this.position.become(that.position);
    this.size.become(that.size);
    return this;
};

Region.prototype.scaleThis = function (n) {
    this.position.scaleThis(n);
    this.size.scaleThis(n);
    return this;
};

Region.prototype.scale = function (n) {
    return this.clone().scaleThis(n);
};

Region.prototype.roundThis = function () {
    this.temp1.become(this.position).addThis(this.size).roundThis();
    this.position.roundThis();
    this.size.become(this.temp1).subThis(this.position);
    return this;
};

Region.prototype.round = function (n) {
    return this.clone().roundThis(n);
};

Region.prototype.roundInwardThis = function () {
    this.temp1.become(this.position).addThis(this.size).floorThis();
    this.position.ceilThis().minThis(this.temp1);
    this.size.become(this.temp1).subThis(this.position);
    return this;
};

Region.prototype.roundInward = function (n) {
    return this.clone().roundInwardThis(n);
};

Region.prototype.roundOutwardThis = function () {
    this.temp1.become(this.position).addThis(this.size).ceilThis();
    this.position.floorThis();
    this.size.become(this.temp1).subThis(this.position);
    return this;
};

Region.prototype.roundOutward = function (n) {
    return this.clone().roundOutwardThis(n);
};

Region.prototype.annex = function (that) {
    return this.clone().annexThis(that);
};

Region.prototype.annexThis = function (that) {
    this.temp1.become(this.position).addThis(this.size);
    this.temp2.become(that.position).addThis(that.size);
    this.position.minThis(that.position);
    this.temp1.maxThis(this.temp2);
    this.size.become(this.temp1).subThis(this.position);
    return this;
};

Region.prototype.equals = function (that) {
    return that && this.position.equals(that.position) && this.size.equals(that.size);
};

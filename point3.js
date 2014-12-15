"use strict";

var Point = require("./point");

module.exports = Point3;
function Point3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Point3.prototype = Object.create(Point.prototype);
Point3.prototype.constructor = Point3;

Point3.zero = new Point3();
Point3.one = new Point3(1, 1, 1);

Point3.prototype.addThis = function (that) {
    this.x = this.x + that.x;
    this.y = this.y + that.y;
    this.z = this.z + that.z;
    return this;
};

Point3.prototype.subThis = function (that) {
    this.x = this.x - that.x;
    this.y = this.y - that.y;
    this.z = this.z - that.z;
    return this;
};

Point3.prototype.mulThis = function (that) {
    this.x = this.x * that.x;
    this.y = this.y * that.y;
    this.z = this.z * that.z;
    return this;
};

Point3.prototype.scaleThis = function (n) {
    this.x = this.x * n;
    this.y = this.y * n;
    this.z = this.z * n;
    return this;
};

Point2.prototype.bitwiseAndThis = function (n) {
    this.x = this.x & n;
    this.y = this.y & n;
    this.z = this.z & n;
    return this;
};

Point2.prototype.bitwiseOrThis = function (n) {
    this.x = this.x | n;
    this.y = this.y | n;
    this.z = this.z | n;
    return this;
};

Point3.prototype.roundThis = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
};

Point3.prototype.floorThis = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
};

Point3.prototype.ceilThis = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
};

Point3.prototype.absThis = function () {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    this.z = Math.abs(this.z);
};

Point2.prototype.minThis = function (that) {
    this.x = Math.min(this.x, that.x);
    this.y = Math.min(this.y, that.y);
    this.z = Math.min(this.z, that.z);
};

Point2.prototype.maxThis = function (that) {
    this.x = Math.max(this.x, that.x);
    this.y = Math.max(this.y, that.y);
    this.z = Math.max(this.z, that.z);
};

Point3.prototype.clone = function () {
    return new Point3(this.x, this.y, this.z);
};

Point3.prototype.become = function (that) {
    this.x = that.x;
    this.y = that.y;
    this.z = that.z;
    return this;
};

Point3.prototype.becomeXY = function (that) {
    this.x = that.x;
    this.y = that.y;
    return this;
};

Point3.prototype.hash = function () {
    return this.x + "," + this.y + "," + this.z;
};

Point3.prototype.equals = function (that) {
    return this.x === that.x && this.y === that.y && this.z === that.z;
};

Point3.prototype.toString = function () {
    return 'Point3(' + this.x + ', ' + this.y + ', ' + this.z + ')';
};


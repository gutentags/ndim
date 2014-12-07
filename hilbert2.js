
// http://en.wikipedia.org/wiki/Hilbert_curve

var Point2 = require("./point2");

module.exports = Hilbert2;
function Hilbert2(resolution) {
    this.resolution = resolution;
}

Hilbert2.prototype.encode = function (point) {
    return encode(point, this.resolution);
};

Hilbert2.prototype.decode = function (scalar) {
    return decodeInto(new Point2(), scalar, this.resolution);
};

Hilbert2.prototype.decodeInto = function (point, scalar) {
    return decodeInto(point, scalar, this.resolution);
};

function encode(point, resolution) {
    var rotation = point.constructor.zero.clone();
    var scalar = 0;
    for (var scale = resolution / 2; scale > 0; scale /= 2) {
        rotation.x = point.x & scale;
        rotation.y = point.y & scale;
        scalar += scale * ((3 * rotation.x) ^ rotation.y);
        rotate(scale, point, rotation);
    }
    return scalar;
}

function decodeInto(point, scalar, resolution) {
    var rotation = point.constructor.zero.clone();
    point.x = 0;
    point.y = 0;
    for (var scale = 1; scale < resolution; scale *= 2) {
        rotation.x = 1 & (scalar / 2);
        rotation.y = 1 & (scalar ^ rotation.x);
        rotate(scale, point, rotation);
        rotation.scaleThis(scale);
        point.addThis(rotation);
        scalar /= 4;
    }
    return point;
}

function rotate(scale, point, rotation) {
    if (!rotation.y) {
        if (rotation.x) {
            point.x = scale - 1 - point.x;
            point.y = scale - 1 - point.y;
        }
        point.transpose();
    }
}


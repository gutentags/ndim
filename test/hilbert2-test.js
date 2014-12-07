
var Hilbert2 = require("../hilbert2");
var Point2 = require("../point2");

it("encodes all points in a 2x2 space", function () {
    var space = new Hilbert2(2);
    expect(space.encode(new Point2(0, 0))).toBe(0);
    expect(space.encode(new Point2(0, 1))).toBe(1);
    expect(space.encode(new Point2(1, 1))).toBe(2);
    expect(space.encode(new Point2(1, 0))).toBe(3);
});

it("encodes some points in a 4x4 space", function () {
    var space = new Hilbert2(4);
    expect(space.encode(new Point2(0, 0))).toBe(0);
    expect(space.encode(new Point2(0, 1))).toBe(1);
    expect(space.encode(new Point2(1, 1))).toBe(2);
    expect(space.encode(new Point2(1, 0))).toBe(3);
    expect(space.encode(new Point2(0, 2))).toBe(4);
});

it("decodes all points in a 2x2 space", function () {
    var space = new Hilbert2(2);
    expect(space.decode(0)).toEqual(new Point2(0, 0));
    expect(space.decode(1)).toEqual(new Point2(0, 1));
    expect(space.decode(2)).toEqual(new Point2(1, 1));
    expect(space.decode(3)).toEqual(new Point2(1, 0));
});

it("encode and decode agree for many resolutions", function () {
    for (var resolution = 1; resolution < Math.pow(2, 5); resolution *= 2) {
        var space = new Hilbert2(resolution);
        for (var index = 0; index < resolution * resolution; index++) {
            expect(space.encode(space.decode(index))).toBe(index);
        }
    }
});


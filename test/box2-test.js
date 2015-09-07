"use strict";

var test = require("tape");
var Box2 = require("../box2");
var Point2 = require("../point2");
var Region2 = require("../region2");

test("box is self-containing", function t(assert) {
    var box = new Box2(new Point2(-1, -1), new Point2(1, 1));
    assert.ok(box.contains(box), "box contains self");
    assert.end();
});

test("box hash", function t(assert) {
    var box = new Box2(new Point2(-1, -1), new Point2(1, 1));
    assert.equals(box.hash(), "-1,-1,1,1", "box has hash");
    assert.end();
});

test("inner and outer box", function t(assert) {
    var inner = new Box2(new Point2(-1, -1), new Point2(1, 1));
    var outer = new Box2(new Point2(-2, -1), new Point2(1, 2));
    assert.ok(outer.contains(inner), "outer contains inner");
    assert.ok(!inner.contains(outer), "inner does not contain outer");
    assert.end();
});

test("round trip through region", function t(assert) {
    var from = new Box2(new Point2(-1, -2), new Point2(3, 4));
    var via = new Region2(new Point2(), new Point2());
    var to = new Box2(new Point2(), new Point2());
    from.copyIntoRegion(via);
    to.copyFromRegion(via);
    assert.ok(from.equals(to), "box makes a round trip through region");
    assert.end();
});

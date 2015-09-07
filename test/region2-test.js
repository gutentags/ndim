"use strict";

var test = require("tape");
var Point2 = require("../point2");
var Region2 = require("../region2");

test("roundOutward", function t(assert) {
    assert.ok(
        new Region2(
            new Point2(0.25, 0.25),
            new Point2(0.5, 0.5)
        )
        .roundOutward()
        .equals(new Region2(
            new Point2(0, 0),
            new Point2(1, 1)
        )),
        "rounds outward"
    );
    assert.end();
});

test("roundInward", function t(assert) {
    assert.ok(
        new Region2(
            new Point2(0.25, 0.25),
            new Point2(0.5, 0.5)
        )
        .roundInward()
        .equals(new Region2(
            new Point2(0, 0),
            new Point2(0, 0)
        )),
        "rounds inward to zero"
    );
    assert.ok(
        new Region2(
            new Point2(0.5, 0.5),
            new Point2(2, 2)
        )
        .roundInward()
        .equals(new Region2(
            new Point2(1, 1),
            new Point2(1, 1)
        )),
        "rounds inward to non-zero on even boundry"
    );
    assert.end();
});

test("round", function t(assert) {
    assert.ok(
        new Region2(
            new Point2(0.5, 0.5),
            new Point2(0.5, 0.5)
        )
        .round()
        .equals(new Region2(
            new Point2(1, 1),
            new Point2(0, 0)
        )),
        "rounds to zero size"
    );
    assert.ok(
        new Region2(
            new Point2(0.25, 0.25),
            new Point2(0.5, 0.5)
        )
        .round()
        .equals(new Region2(
            new Point2(0, 0),
            new Point2(1, 1)
        )),
        "rounds outward"
    );
    assert.end();
});

test("annex", function t(assert) {

    var a = new Region2(new Point2(0, 0), new Point2(1, 1));
    var b = new Region2(new Point2(2, 2), new Point2(1, 1));
    a.annexThis(b);
    assert.ok(a.equals(new Region2(new Point2(0, 0), new Point2(3, 3))),
        "subsumes region +x +y");

    var a = new Region2(new Point2(0, 0), new Point2(1, 1));
    var b = new Region2(new Point2(2, 2), new Point2(0, 0));
    a.annexThis(b);
    assert.ok(a.equals(new Region2(new Point2(0, 0), new Point2(2, 2))),
        "subsumes zero size region");

    var a = new Region2(new Point2(2, 2), new Point2(0, 0));
    var b = new Region2(new Point2(0, 0), new Point2(1, 1));
    a.annexThis(b);
    assert.ok(a.equals(new Region2(new Point2(0, 0), new Point2(2, 2))),
        "subsumes region -x -y");

    assert.end();
});

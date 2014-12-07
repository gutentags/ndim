
var Point2 = require("../point2");
var Region2 = require("../region2");

describe("roundOutward", function () {
    it("works", function () {
        expect(
            new Region2(
                new Point2(0.25, 0.25),
                new Point2(0.5, 0.5)
            )
            .roundOutward()
        ).toEqual(new Region2(
            new Point2(0, 0),
            new Point2(1, 1))
        );
    });
});

describe("roundInward", function () {
    it("works", function () {
        expect(
            new Region2(
                new Point2(0.25, 0.25),
                new Point2(0.5, 0.5)
            )
            .roundInward()
        ).toEqual(new Region2(
            new Point2(0, 0),
            new Point2(0, 0))
        );
    });

    it("works", function () {
        expect(
            new Region2(
                new Point2(0.5, 0.5),
                new Point2(2, 2)
            )
            .roundInward()
        ).toEqual(new Region2(
            new Point2(1, 1),
            new Point2(1, 1))
        );
    });

});

describe("round", function () {

    it("rounds to zero size", function () {
        expect(
            new Region2(
                new Point2(0.5, 0.5),
                new Point2(0.5, 0.5)
            )
            .round()
        ).toEqual(new Region2(
            new Point2(1, 1),
            new Point2(0, 0))
        );
    });

    it("rounds outward", function () {
        expect(
            new Region2(
                new Point2(0.25, 0.25),
                new Point2(0.5, 0.5)
            )
            .round()
        ).toEqual(new Region2(
            new Point2(0, 0),
            new Point2(1, 1))
        );
    });

});

describe("annex", function () {

    it("should subsume region +x +y", function () {
        var a = new Region2(new Point2(0, 0), new Point2(1, 1));
        var b = new Region2(new Point2(2, 2), new Point2(1, 1));
        a.annexThis(b);
        expect(a).toEqual(new Region2(new Point2(0, 0), new Point2(3, 3)));
    });

    it("should subsume zero size region", function () {
        var a = new Region2(new Point2(0, 0), new Point2(1, 1));
        var b = new Region2(new Point2(2, 2), new Point2(0, 0));
        a.annexThis(b);
        expect(a).toEqual(new Region2(new Point2(0, 0), new Point2(2, 2)));
    });

    it("should subsume region -x, -y", function () {
        var a = new Region2(new Point2(2, 2), new Point2(0, 0));
        var b = new Region2(new Point2(0, 0), new Point2(1, 1));
        a.annexThis(b);
        expect(a).toEqual(new Region2(new Point2(0, 0), new Point2(2, 2)));
    });

});


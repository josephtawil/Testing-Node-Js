const { add } = require("../util/util");

describe("Add", () => {

    describe("Success", () => {
        //toBe is the result we expect
        it("Should return the sum of the 2 past arguments", () => {
            expect(add(2, 2)).toBe(4);
        });
    });
});
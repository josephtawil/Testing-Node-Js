//using test to have less errors when writing code and to develop code faster
const { add, minus, multiply, divide, power } = require("../util/util");

describe("Add", () => {

    describe("Success", () => {
        //toBe is the result we expect
        it("Should return the sum of the 2 past arguments", () => {
            expect(add(2, 2)).toBe(4);
        });
    });

    describe("Failure", () => {
        //toBe is the result we expect
        it("Should throw an error if 1st argument isn't a number", () => {
            expect(() => add("2", 2)).toThrowError();
        });
        it("Should throw an error if 2nd argument isn't a number", () => {
            expect(() => add(2, "2")).toThrowError();
        });
        it("Should throw an error if no arguments were received", () => {
            expect(() => add()).toThrowError();
        });
    });
});

describe("Minus", () => {
    describe("Success", () => {
        it("Should return the subtraction of 2 past arguments", () => {
            expect(minus(4, 2)).toBe(2);
        });
    });
    describe("Failure", () => {
        it("Should throw an argument if 1st argument is not a number", () => {
            expect(() => minus("2", 2)).toThrowError();
        });
        it("Should throw an argument if 2nd argument is not a number", () => {
            expect(() => minus(2, "2")).toThrowError();
        });
        it("Should throw an error if no arguments were received", () => {
            expect(() => minus()).toThrowError();
        });
    });
});

describe("Multiply", () => {
    describe("Success", () => {
        it("Should multiply the two arguments given", () => {
            expect(multiply(2, 2)).toBe(4);
        });
    });
    describe("Failure", () => {
        it("Should throw an argument if 1st argument is not a number", () => {
            expect(() => multiply("2", 2)).toThrowError();
        });
        it("Should throw an argument if 2nd argument is not a number", () => {
            expect(() => multiply(2, "2")).toThrowError();
        });
        it("Should throw an error if no arguments were received", () => {
            expect(() => multiply()).toThrowError();
        });
    });
});
describe("Divide", () => {
    describe("Success", () => {
        it("Should multiply the two arguments given", () => {
            expect(divide(4, 2)).toBe(2);
        });
    });
    describe("Failure", () => {
        it("Should throw an error if 1st argument is not a number", () => {
            expect(() => divide("2", 2)).toThrowError();
        });
        it("Should throw an error if 2nd argument is not a number", () => {
            expect(() => divide(2, "2")).toThrowError();
        });
        it("Should throw an error if 2nd argument is a 0", () => {
            expect(() => divide(2, 0)).toThrowError();
        });
        it("Should throw an error if no arguments were received", () => {
            expect(() => divide()).toThrowError();
        });
    });
});
describe("Power", () => {
    describe("Success", () => {
        it("Should multiply the two arguments given", () => {
            expect(power(2, 2)).toBe(4);
        });
    });
    describe("Failure", () => {
        it("Should throw an argument if 1st argument is not a number", () => {
            expect(() => power("2", 2)).toThrowError();
        });
        it("Should throw an argument if 2nd argument is not a number", () => {
            expect(() => power(2, "2")).toThrowError();
        });
        it("Should throw an error if no arguments were received", () => {
            expect(() => power()).toThrowError();
        });
    });
});
describe("Check if number divides by 3 and 5", function () {

    beforeEach(function () {
        myNum = new fizzBuzz();
    });

    describe("FizzBuzz function", function () {
        it("should return fizzBuzz for 15", function () {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });

        it("should return fizz for 9", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });

        it("should return fizzBuzz for 25", function () {
            var result = fizzBuzz(25);
            expect(result).toBe("Buzz");
        });

        it("should return 7 for 7", function () {
            var result = fizzBuzz(7);
            expect(result).toBe(7);
        });

        it("should return invalid input", function () {
            var result = fizzBuzz("hello");
            expect(result).toBe("Invalid input");
        });
    });
});
